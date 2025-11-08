// Acción: Saltar campo después de reintentos
export function skipFieldAfterRetries(
  currentFormStatus: FormStatus,
  scopeLocation: string
): FormStatus {
  const { retryCount = {}, skippedFields = [] } = currentFormStatus;
  const newRetryCount = { ...retryCount };
  newRetryCount[scopeLocation] = (newRetryCount[scopeLocation] || 0) + 1;
  const newSkippedFields = [...skippedFields];
  if (newRetryCount[scopeLocation] >= 2) {
    if (!newSkippedFields.includes(scopeLocation)) {
      newSkippedFields.push(scopeLocation);
    }
  }
  return {
    ...currentFormStatus,
    retryCount: newRetryCount,
    skippedFields: newSkippedFields
  };
}
