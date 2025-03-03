import { FormSelect } from "../components/form-controller/select";
import FormInput from "../components/form-controller/input";
import { InputAdornment } from "@mui/material";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import { deviceTypes, Options } from "../constant";
import { useFormContext } from "react-hook-form";
import { useEffect } from "react";
import FlagIcon from "@mui/icons-material/Flag";
import { formValidation } from "../schema/formValidation";
const Step1 = () => {
  const methods = useFormContext();

  const brandOptions = Options?.map((e) => ({
    label: e?.name,
    value: e?.name,
  }));
  const stateOption = Options?.find(
    (e) => e.name === methods?.watch("brand")
  )?.state?.map((e) => ({ label: e?.name, value: e?.name }));

  useEffect(() => {
    if (methods?.watch("state")) {
      const x = Options?.find(
        (e) => e.name === methods.watch("brand")
      )?.state?.find((x) => x.name === methods?.watch("state"));
      methods.setValue("country", x?.country?.name ?? "",{shouldValidate:true});      
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [methods?.watch("state")]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid size={4}>
          <FormSelect
            rules={formValidation["brand"]}
            options={brandOptions ?? []}
            label="Brand"
            name="brand"
          />
        </Grid>
        <Grid size={4}>
          <FormSelect
            rules={formValidation["state"]}
            options={stateOption ?? []}
            label="Conviction State"
            name="state"
          />
        </Grid>
        <Grid size={4}>
          <FormInput
            label="Conviction Country"
            rules={formValidation["country"]}
            startAdornment={
              <InputAdornment position="start">
                <FlagIcon />
              </InputAdornment>
            }
            name="country"
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
