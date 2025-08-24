// Node: UpdateUserData - nd-b2aae07e53
// "Retrieve and Update User Data Based on Phone Number" - ins-5d95da0fa3

export {};

// ------------------ EXECUTE CODE -------------------------

const { phone } = user
console.log('🤖 Buscando cliente con el teléfono:', phone)

let topics: string[] = [] // Explicitly type topics as a string array

if (env.WAB_TEMPLATE === 'leads_cupo_brilla') {
  user.creditProfile = 'CUPO_BRILLA'
  user.purchasePreference = 'CUPO_BRILLA'
  topics.push('CUPO_BRILLA')
}

if (phone) {
  try {
    const lastTenDigitsOfPhone = phone.slice(-10)
    const recordResults = await leadClientsTable.findRecords({
      filter: {
        // Usa $regex para buscar el patrón 'termina con los últimos 10 dígitos'
        // El `$` al final de la expresión regular significa 'termina con'
        TELEFONO: { $regex: `${lastTenDigitsOfPhone}$` }
      }
    })
    console.log('❕ recordResults:', recordResults)
    const record = recordResults.length ? recordResults[0] : undefined

    if (record) {
      console.log(`✅ Record found: ${record.id}`)

      // Map Airtable field names to user object keys for cleaner assignment
      updateUserFromRecord(record)
      user.authorizedPop = {
        answer: 'ACCEPTED',
        askedBefore: true
      }

      updateUserEngagement(record)
      // Ensure TEMAS is always an array
    } else {
      console.error(`❌ Record not found 🥹`)
      conversation.flow = {
        ending: '',
        state: '',
        topics: ['PRE_ENGAGEMENT'],
        status: 'COLD_PROSPECT',
        context: 'PRE_ENGAGEMENT'
      }
    }

  } catch (error) {
    console.error('❌ Error getting data:', error)
    // Consider re-throwing or handling the error more gracefully depending on your application's needs
    throw error
  }
}

function updateUserFromRecord(record: leadClientsTableRecord) {
  const fieldMap = {
    NOMBRE: 'fullName',
    UBICACION_DEL_USUARIO: 'location',
    UBICACION_DE_SERVICIO: 'serviceLocation',
    CEDULA: 'nationalID',
    NUMERO_DE_FACTURA: 'brillaBillNumber',
    REPORTADO: 'negativeCreditReport'
  }

  for (const airtableField in fieldMap) {
    const userField = fieldMap[airtableField as keyof typeof fieldMap] // Type assertion for correct key access
    const airtableValue = record[airtableField as keyof typeof record] // Type assertion for correct key access

    // Assign only if the user's field is not already set and Airtable has a value
    if (!user[userField as keyof typeof user] && airtableValue) {
      user[userField] = airtableValue
    }
  }
}

type Conclusion = 'COMPLEXED' | 'WRONG' | 'SERVED' | 'TIMEDOUT' | 'HOOKED' | ''

function updateUserEngagement(record: leadClientsTableRecord) {
  const ending = record.CONCLUSION as Conclusion
  const { flow } = conversation || {}

  conversation.flow = {
    ending: ending || flow?.ending || '',
    state: flow?.state || '',
    topics: [...topics, 'PRE_ENGAGEMENT'],
    status: 'COLD_PROSPECT',
    context: 'PRE_ENGAGEMENT'
  }

  topics = Array.isArray(record.TEMAS) ? record.TEMAS : []
  conversation.SummaryAgent.summary = env.WAB_CONTEXT
}
