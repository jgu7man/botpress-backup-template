// Node: MockHook - nd-b722467149
// "Manage Lead Records Based on Phone Number Lookup" - ins-c45e78833d

export {};

// ------------------ EXECUTE CODE -------------------------

const TELEFONO = '573011050979'
const NOMBRE = 'CRISTEL GUERRA STIVENSON'

event.tags.user['whatsapp:userId'] = TELEFONO

const mockData: Partial<leadClientsTableRecord> = {
    NOMBRE,
    TELEFONO,
    CONCLUSION: 'HOOKED',
    ESTATUS: 'COLD_PROSPECT'
  }

const records = await leadClientsTable.findRecords({
  filter: { TELEFONO }
})

if (!records.length) {
  console.log('⚠️ Record No Encontrado')
  leadClientsTable.createRecord(mockData)
} else {
  const row = records[0].id
  console.log('✅ Record Encontrado', row)
  leadClientsTable.updateRecord(row, mockData)
}
