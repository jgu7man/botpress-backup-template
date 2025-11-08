import { FieldDefinition } from "./schemas";

const userFormDataDefinitions: FieldDefinition[] = [
  {
    property_name: "userName",
    scope_location: user.fullName,
    node: "USER_DATA_FORM",
    required: true
  },
  {
    property_name: "consent",
    scope_location: user.authorizedPop.answer,
    node: "USER_DATA_FORM",
    required: true
  },
  {
    property_name: "phone",
    scope_location: user.phone,
    node: "USER_DATA_FORM",
    required: () => user.authorizedPop?.answer === "ACCEPTED"
  },
  {
    property_name: "location",
    scope_location: user.location,
    node: "USER_DATA_FORM",
    required: false
  }
];

const preferencesFormDataDefinitions: FieldDefinition[] = [
  {
    property_name: "purchasePreference",
    scope_location: user.purchasePreference,
    node: "PREFERENCES_FORM",
    required: true
  },
  {
    property_name: "assistanceMode",
    scope_location: user.assistanceMode,
    node: "PREFERENCES_FORM",
    required: false
  },
  {
    property_name: "interestedProductReference",
    scope_location: user.interestedProduct.reference,
    node: "PREFERENCES_FORM",
    required: true
  },
  {
    property_name: "serviceLocation",
    scope_location: user.serviceLocation,
    node: "PREFERENCES_FORM",
    required: false
  }
];

const creditDataFormDataDefinitions: FieldDefinition[] = [
  {
    property_name: "creditProfile",
    scope_location: user.creditProfile,
    node: "CREDIT_DATA_FORM",
    required: true
  },
  {
    property_name: "brillaBillNumber",
    scope_location: user.brillaBillNumber,
    node: "CREDIT_DATA_FORM",
    required: () => user.creditProfile === "CUPO_BRILLA"
  },
  {
    property_name: "negativeCreditReport",
    scope_location: user.negativeCreditReport,
    node: "CREDIT_DATA_FORM",
    required: () => user.creditProfile === "CUPO_BRILLA"
  },
  {
    property_name: "jobContractType",
    scope_location: user.jobContractType,
    node: "CREDIT_DATA_FORM",
    required: () => user.purchasePreference === "CREDIT"
  }
];

workflow.formDefinition = [
  ...userFormDataDefinitions,
  ...preferencesFormDataDefinitions,
  ...creditDataFormDataDefinitions
];
