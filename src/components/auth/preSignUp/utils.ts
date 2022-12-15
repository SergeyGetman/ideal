export const mapFormValuesToMutationVariables = (values, extraData) => ({
  email: values?.email,
  country: values?.country?.id,
  birthDay: values?.birthdate?.day,
  birthMonth: values?.birthdate?.month,
  birthYear: values?.birthdate?.year,
  adult: values?.adult,
  subscribe: values?.subscribe,
  phone: extraData?.phone,
  offerId: extraData?.offerId,
  fPrint: extraData?.fPrint ?? '',
});
