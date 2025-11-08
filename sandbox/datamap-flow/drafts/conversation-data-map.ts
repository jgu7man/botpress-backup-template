class ConversationDataMap {
  userFormDataState: DataStatus[] = [
    initialDataState({
      propertyName: "userName",
      scopeLocation: "user.fullName",
      node: DataNodeEnum.USER_DATA_FORM,
      required: true
    }),
    initialDataState({
      propertyName: "user.authorizedPop.answer",
      scopeLocation: "user.authorizedPop.answer",
      node: DataNodeEnum.USER_DATA_FORM,
      required: true
    }),
    initialDataState({
      propertyName: "user.phone",
      scopeLocation: "user.phone",
      node: DataNodeEnum.USER_DATA_FORM,
      required: () => this.values["user"]?.authorizedPop.answer == "ACCEPTED"
    }),
    initialDataState({
      propertyName: "user.location",
      scopeLocation: "user.location",
      node: DataNodeEnum.USER_DATA_FORM,
      required: false
    })
  ];
  preferencesFormDataState: DataStatus[] = [
    initialDataState({
      propertyName: "user.purchasePreference",
      scopeLocation: "user.purchasePreference",
      node: DataNodeEnum.PREFERENCES_FORM,
      required: true
    }),
    initialDataState({
      propertyName: "user.assistanceMode",
      scopeLocation: "user.assistanceMode",
      node: DataNodeEnum.PREFERENCES_FORM,
      required: false
    }),
    initialDataState({
      propertyName: "user.interestedProduct.reference",
      scopeLocation: "user.interestedProduct.reference",
      node: DataNodeEnum.PREFERENCES_FORM,
      required: true
    }),
    initialDataState({
      propertyName: "user.serviceLocation",
      scopeLocation: "user.serviceLocation",
      node: DataNodeEnum.PREFERENCES_FORM,
      required: false
    })
  ];
  creditDataFormDataState: DataStatus[] = [
    initialDataState({
      propertyName: "user.creditProfile",
      scopeLocation: "user.creditProfile",
      node: DataNodeEnum.CREDIT_DATA_FORM,
      required: true
    }),
    initialDataState({
      propertyName: "user.brillaBillNumber",
      scopeLocation: "user.brillaBillNumber",
      node: DataNodeEnum.CREDIT_DATA_FORM,
      required: false
    }),
    initialDataState({
      propertyName: "user.negativeCreditReport",
      scopeLocation: "user.negativeCreditReport",
      node: DataNodeEnum.CREDIT_DATA_FORM,
      required: false
    }),
    initialDataState({
      propertyName: "user.jobContractType",
      scopeLocation: "user.jobContractType",
      node: DataNodeEnum.CREDIT_DATA_FORM,
      required: false
    })
  ];
  conversationDataMap: DataStatus[] = [
    ...this.userFormDataState,
    ...this.preferencesFormDataState,
    ...this.creditDataFormDataState
  ];

  get values(): Record<string, any> {
    const values: Record<string, any> = {};
    this.conversationDataMap.forEach((dataStatus) => {
      values[dataStatus.propertyName] = dataStatus.value;
    });
    return values;
  }
}
enum DataStatusEnum {
  PENDING = "pending",
  COLLECTED = "collected",
  SKIPPED = "skipped",
  FAILED = "failed"
}

enum DataNodeEnum {
  USER_DATA_FORM = "userDataForm",
  PREFERENCES_FORM = "preferencesForm",
  CREDIT_DATA_FORM = "creditDataForm"
}

interface DataStatus {
  propertyName: string;
  value?: any;
  status: DataStatusEnum;
  scopeLocation: string;
  node?: DataNodeEnum;
  required?: boolean | ((data: any) => boolean);
}

const initialDataState = ({
  propertyName,
  scopeLocation,
  node,
  required
}): DataStatus => ({
  propertyName,
  scopeLocation,
  status: DataStatusEnum.PENDING,
  node,
  required
});
