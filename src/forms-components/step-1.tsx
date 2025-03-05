import { FormSelect } from "../components/form-controller/select";
import FormInput from "../components/form-controller/input";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import { brandOption,  deviceTypes } from "../constant";
import { useFormContext, UseFormReturn } from "react-hook-form";
import { formValidation } from "../schema/formValidation";
import { FormValues } from "../types";
import { useGetCountryOption, useGetCountyOption, useGetStateOption } from "../hooks";
const Step1 = (props: {
  rootMethods?: UseFormReturn<FormValues, unknown, undefined>;
}) => {
// eslint-disable-next-line @typescript-eslint/no-unused-expressions
props

  const methods = useFormContext();
  const brandOptions = brandOption?.map((e) => ({
    label: e?.displayName,
    value: e?.id,
  }));

  const countryOptions= useGetCountryOption(methods?.watch("brand"))
  const stateOptions= useGetStateOption(methods?.watch("country"))

  const countyOptions= useGetCountyOption(methods?.watch("country"))
 
 
  console.log(methods?.watch());
  




  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid size={4}>
          <FormSelect
            rules={formValidation["brand"]}
            options={brandOptions ?? []}
            onExtraEvent={() => {
              methods?.unregister("state");
              methods?.unregister("country");
              methods?.unregister("county");

            }}
            label="Brand"
            name="brand"
          />
        </Grid>
      
        <Grid size={4}>
          <FormSelect
            rules={
              methods?.watch("brand") !== "550e8400-e29b-41d4-a716-446655440000"
                ? formValidation["country"]
                : undefined
            }
            options={countryOptions}
            label="Conviction Country"
            name="country"
          />
        </Grid>
        <Grid size={4}>
          <FormSelect
            rules={
              methods?.watch("brand") !== "550e8400-e29b-41d4-a716-446655440000"
                ? formValidation["state"]
                : undefined
            }
            options={stateOptions ?? []}
            label="Conviction State"
            name="state"
          
          />
        </Grid>
        <Grid size={4}>
          <FormSelect
            rules={
              methods?.watch("brand") !== "550e8400-e29b-41d4-a716-446655440000"
                ? formValidation["country"]
                : undefined
            }
            options={countyOptions}
            label="County"
            name="county"
          />
        </Grid>
        <Grid size={4}>
          <FormSelect
            rules={formValidation["deviceType"]}
            options={deviceTypes}
            label="Device Type"
            name="deviceType"
          />
        </Grid>
        <Grid size={4}>
          <FormInput
            label="Device Name"
            name="deviceName"
            rules={formValidation["deviceName"]}
          />
        </Grid>
        <Grid size={4}>
          <FormInput
            label="Device No"
            rules={formValidation["deviceNo"]}
            name="deviceNo"
          />
        </Grid>
      </Grid>
    </Box>
  );
};
export default Step1;
