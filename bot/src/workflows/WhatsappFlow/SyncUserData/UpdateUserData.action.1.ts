import { user, conversation } from "@main";
// Node: UpdateUserData - nd-b2aae07e53
// "Update User Profile Based on Phone Number Records" - ins-5d95da0fa3

// ------------------ EXECUTE CODE -------------------------

if (env.WAB_TEMPLATE === 'leads_cupo_brilla') {
  user.creditProfile = 'CUPO_BRILLA'
  user.purchasePreference = 'CUPO_BRILLA'
}

const { phone } = user
let topics: string[] = [] // Explicitly type topics as a string array

if (phone) {
  try {
    const lastTenDigitsOfPhone = phone.slice(-10)

    const existingRecords = await leadClientsTable.findRecords({
      filter: {
        // Usa $regex para buscar el patrón 'termina con los últimos 10 dígitos'
        // El `$` al final de la expresión regular significa 'termina con'
        TELEFONO: { $regex: `${lastTenDigitsOfPhone}$` }
      }
    })

    if (existingRecords.length > 0) {
      const record = existingRecords[0] // Use a single record if multiple are found
      console.log(`✅ Record found: ${record.id}`)

      // Map Airtable field names to user object keys for cleaner assignment
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

      // Ensure TEMAS is always an array
      topics = Array.isArray(record.TEMAS) ? record.TEMAS : []
    } else {
      throw new Error(`❌ Record not found 🥹`)
    }
  } catch (error) {
    console.error('❌ Error getting data:', error)
    // Consider re-throwing or handling the error more gracefully depending on your application's needs
  }
}

const { flow } = conversation || {}

conversation.flow = {
  ending: flow?.ending || '',
  state: flow?.state || '',
  topics: [...topics, 'PRE_ENGAGEMENT', 'CUPO_BRILLA'],
  status: 'COLD_PROSPECT',
  context: 'PRE_ENGAGEMENT'
}

conversation.SummaryAgent.summary = env.WAB_CONTEXT
