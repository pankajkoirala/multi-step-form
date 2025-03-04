import { FormSelect } from "../components/form-controller/select";
import FormInput from "../components/form-controller/input";
import { InputAdornment } from "@mui/material";

import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import HomeIcon from '@mui/icons-material/Home';
import { formValidation } from "../schema/formValidation";

const Step3 = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid size={6}>
          <FormInput
            rules={formValidation["contactPersonName"]}
            label="Contact Person Name"
            name="contactPersonName"

          />
        </Grid>
        <Grid size={6}>
          <FormSelect
                      rules={formValidation["contactPersonRelation"]}

            options={[
              { label: "Father", value: "father" },
              { label: "Mother", value: "mother" },
              { label: "Uncle", value: "uncle" },
              { label: "Aunt", value: "aunt" },
            ]}
            label="Relation"
            name="ContactPersonRelation"
          />
        </Grid>
        <Grid size={6}>
          <FormInput
            rules={formValidation["contactPersonAddress"]}
            label="Address"
            startAdornment={
              <InputAdornment position="start">
                <HomeIcon />
              </InputAdornment>
            }
            name="ContactPersonAddress"
          />
        </Grid>

        <Grid size={6}>
          <FormInput
            label="Mobile No"
            rules={formValidation["contactPersonMobileNo"]}

            startAdornment={
              <InputAdornment position="start">
                <PhoneAndroidIcon />
              </InputAdornment>
            }
            name="ContactPersonMobileNo"
          />
        </Grid>
      </Grid>
    </Box>
  );
};
export default Step3;
