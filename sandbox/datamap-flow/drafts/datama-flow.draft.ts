export enum DataStatusEnum {
  PENDING = "pending",
  COLLECTED = "collected",
  SKIPPED = "skipped",
  FAILED = "failed"
}

export enum DataNodeEnum {
  USER_DATA_FORM = "userDataForm",
  PREFERENCES_FORM = "preferencesForm",
  CREDIT_DATA_FORM = "creditDataForm"
}

// Interfaces y types para tipados claros
export interface FieldDefinition {
  scopeLocation: string;
  node: DataNodeEnum;
  required: boolean | ((data: FormValue) => boolean);
}

export type FieldStatus = Record<
  string,
  { value: any; status: DataStatusEnum }
>;

export interface FormStatus {
  nextField: string | null;
  currentIndex: string | null;
  formValue: FormValue;
}

export type FormValue = Record<string, any>;

export interface Scopes {
  user?: Record<string, any>;
  workflow?: Record<string, any>;
  conversation?: Record<string, any>;
  bot?: Record<string, any>;
}

// 1. Field definitions: Constantes exportadas con tipado
export const userFormDataDefinitions: FieldDefinition[] = [
  {
    scopeLocation: "user.fullName",
    node: DataNodeEnum.USER_DATA_FORM,
    required: true
  },
  {
    scopeLocation: "user.authorizedPop.answer",
    node: DataNodeEnum.USER_DATA_FORM,
    required: true
  },
  {
    scopeLocation: "user.phone",
    node: DataNodeEnum.USER_DATA_FORM,
    required: (data: FormValue) =>
      data["user"]?.authorizedPop?.answer === "ACCEPTED"
  },
  {
    scopeLocation: "user.location",
    node: DataNodeEnum.USER_DATA_FORM,
    required: false
  }
];

export const preferencesFormDataDefinitions: FieldDefinition[] = [
  {
    scopeLocation: "user.purchasePreference",
    node: DataNodeEnum.PREFERENCES_FORM,
    required: true
  },
  {
    scopeLocation: "user.assistanceMode",
    node: DataNodeEnum.PREFERENCES_FORM,
    required: false
  },
  {
    scopeLocation: "user.interestedProduct.reference",
    node: DataNodeEnum.PREFERENCES_FORM,
    required: true
  },
  {
    scopeLocation: "user.serviceLocation",
    node: DataNodeEnum.PREFERENCES_FORM,
    required: false
  }
];

export const creditDataFormDataDefinitions: FieldDefinition[] = [
  {
    scopeLocation: "user.creditProfile",
    node: DataNodeEnum.CREDIT_DATA_FORM,
    required: true
  },
  {
    scopeLocation: "user.brillaBillNumber",
    node: DataNodeEnum.CREDIT_DATA_FORM,
    required: (data: FormValue) => data["user"].creditProfile === "CUPO_BRILLA"
  },
  {
    scopeLocation: "user.negativeCreditReport",
    node: DataNodeEnum.CREDIT_DATA_FORM,
    required: (data: FormValue) => data["user"].creditProfile === "CUPO_BRILLA"
  },
  {
    scopeLocation: "user.jobContractType",
    node: DataNodeEnum.CREDIT_DATA_FORM,
    required: (data: FormValue) => data["user"].purchasePreference === "CREDIT"
  }
];

export const formDefinitions: FieldDefinition[] = [
  ...userFormDataDefinitions,
  ...preferencesFormDataDefinitions,
  ...creditDataFormDataDefinitions
];

// Función para evaluar formValue desde scopes (tipado Scopes)
export const evaluateFormValue = (scopes: Scopes): FormValue => {
  const formValue: FormValue = {};
  formDefinitions.forEach((def: FieldDefinition) => {
    // Acceder a la ruta en scopes (e.g., scopes.user.fullName)
    const keys = def.scopeLocation.split(".");
    let value: any = scopes;
    for (const key of keys) {
      value = value?.[key];
    }
    formValue[def.scopeLocation] = value;
  });
  return formValue;
};

// Función para determinar el siguiente campo (tipado FieldStatus, FormValue)
export const determineNextField = (
  fieldStatus: FieldStatus,
  currentIndex: string | null,
  formValue: FormValue
): string | null => {
  const currentDefIndex = currentIndex
    ? formDefinitions.findIndex(
        (def: FieldDefinition) => def.scopeLocation === currentIndex
      )
    : -1;
  let nextIndex = currentDefIndex;

  // Priorizar FAILED al reiniciar
  const failedField = Object.keys(fieldStatus).find(
    (key) => fieldStatus[key].status === DataStatusEnum.FAILED
  );
  if (failedField) {
    const def = formDefinitions.find(
      (d: FieldDefinition) => d.scopeLocation === failedField
    );
    if (def) {
      const isRequired =
        typeof def.required === "function"
          ? def.required(formValue)
          : def.required;
      if (isRequired) return failedField; // Preguntar si requerido
      // Si no requerido, dejar PENDING y avanzar
      fieldStatus[failedField].status = DataStatusEnum.PENDING;
    }
  }

  // Lógica normal
  while (nextIndex < formDefinitions.length - 1) {
    nextIndex++;
    const def = formDefinitions[nextIndex];
    const status =
      fieldStatus[def.scopeLocation]?.status || DataStatusEnum.PENDING;
    const isRequired =
      typeof def.required === "function"
        ? def.required(formValue)
        : def.required;

    if (status === DataStatusEnum.COLLECTED) continue; // Avanzar si collected

    if (status === DataStatusEnum.SKIPPED) {
      if (isRequired) {
        // Repetir pregunta (primera vez fallida)
        return def.scopeLocation;
      } else {
        continue; // Avanzar
      }
    }

    if (status === DataStatusEnum.PENDING && !formValue[def.scopeLocation]) {
      // Primera consulta fallida: Marcar SKIPPED
      fieldStatus[def.scopeLocation] = {
        value: undefined,
        status: DataStatusEnum.SKIPPED
      };
      if (isRequired) {
        return def.scopeLocation; // Repetir
      } else {
        continue; // Avanzar
      }
    }

    return def.scopeLocation; // Próximo pendiente
  }

  return null; // Fin
};

// Función para computar formStatus (tipado FieldStatus, FormStatus, Scopes)
export const computeFormStatus = (
  fieldStatus: FieldStatus,
  currentFormStatus: Partial<FormStatus>,
  scopes: Scopes
): FormStatus => {
  const formValue = evaluateFormValue(scopes);
  const currentIndex =
    currentFormStatus.currentIndex || formDefinitions[0]?.scopeLocation || null;
  const nextField = determineNextField(fieldStatus, currentIndex, formValue);

  return {
    nextField,
    currentIndex: nextField, // nextField igual a currentIndex
    formValue
  };
};

// Función para actualizar fieldStatus (tipado FieldStatus, Scopes)
export const updateFieldStatus = (
  fieldStatus: FieldStatus,
  scopeLocation: string,
  value: any,
  scopes: Scopes,
  isBotFailure: boolean = false
): FieldStatus => {
  const def = formDefinitions.find(
    (d: FieldDefinition) => d.scopeLocation === scopeLocation
  );
  if (!def) return fieldStatus;

  const formValue = evaluateFormValue(scopes);
  const isRequired =
    typeof def.required === "function" ? def.required(formValue) : def.required;

  if (isBotFailure) {
    fieldStatus[scopeLocation] = { value, status: DataStatusEnum.FAILED };
  } else if (value !== undefined) {
    fieldStatus[scopeLocation] = { value, status: DataStatusEnum.COLLECTED };
  } else {
    // Lógica SKIPPED
    const currentStatus = fieldStatus[scopeLocation]?.status;
    if (currentStatus === DataStatusEnum.SKIPPED && isRequired) {
      // Segunda falla: Dejar PENDING, no collected
      fieldStatus[scopeLocation] = { value, status: DataStatusEnum.PENDING };
    } else {
      fieldStatus[scopeLocation] = { value, status: DataStatusEnum.SKIPPED };
    }
  }

  return fieldStatus;
};

// Interface DataStatus ajustada (simplificada, ya que value/status están en FieldStatus)
export interface DataStatus {
  scopeLocation: string;
  node?: DataNodeEnum;
  required?: boolean | ((data: FormValue) => boolean);
}
