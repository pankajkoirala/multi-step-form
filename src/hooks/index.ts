import {
  brandOption,
  countryOption,
  stateOption,
} from "../constant";

export const useGetCountryOption = (id: string) => {
  const selctedBrand = brandOption?.find((e) => e?.id === id);
  const options = countryOption
    ?.filter((e) => e?.brandID === selctedBrand?.brandID)
    .map((x) => ({ label: x?.country, value: x?.id }));
  return options;
};

export const useGetStateOption = (id: string) => {
  const selctedCountry = countryOption?.find((e) => e?.id === id);
  
  const options = stateOption
  ?.filter((e) => e?.regionId === selctedCountry?.regionId)
  .map((x) => ({ label: x?.name, value: x?.id }));
  return options;
};

export const useGetCountyOption = (id: string) => {
    console.log();
    
  const selcteState = stateOption?.find((e) => e?.id === id);

  const options = stateOption
    ?.filter((e) => e?.stateId === selcteState?.stateId)
    .map((x) => ({ label: x?.name, value: x?.id }));

  return options;
};
