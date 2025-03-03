import { FormSelect } from "../components/form-controller/select";
import FormInput from "../components/form-controller/input";
import { InputAdornment } from "@mui/material";

import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import HomeIcon from "@mui/icons-material/Home";
import { formValidation } from "../schema/formValidation";
const Step2 = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid size={4}>
          <FormInput
            label="First Name"
            rules={formValidation["firstName"]}
            name="firstName"
          />
        </Grid>
        <Grid size={4}>
          <FormInput
            label="Last Name"
            rules={formValidation["lastName"]}
            name="lastName"
          />
        </Grid>
        <Grid size={4}>
          <FormSelect
            rules={formValidation["gender"]}
            options={[
              { label: "Male", value: "male" },
              { label: "Female", value: "female" },
              { label: "Other", value: "other" },
            ]}
            label="Gender"
            name="gender"
          />
        </Grid>
        <Grid size={4}>
          <FormSelect
            rules={formValidation["nationality"]}
            options={[
              { label: "Nepali", value: "nepali" },
              { label: "Indian", value: "indian" },
              { label: "Other", value: "other" },
            ]}
            label="Nationality"
            name="nationality"
          />
        </Grid>
        <Grid size={4}>
          <FormInput
            label="Address"
            rules={formValidation["address"]}
            startAdornment={
              <InputAdornment position="start">
                <HomeIcon />
              </InputAdornment>
            }
            name="address"
          />
        </Grid>
        <Grid size={4}>
          <FormInput
            type="Number"
            label="Mobile no"
            rules={formValidation["mobileNo"]}
            startAdornment={
              <InputAdornment position="start">
                <PhoneAndroidIcon />
              </InputAdornment>
            }
            name="mobileNo"
          />
        </Grid>

        <Grid size={4}>
          <FormSelect
            rules={formValidation["idCard"]}
            options={[
              { label: "Passport", value: "Passport" },
              { label: "Personal ID", value: "Personal ID" },
              { label: "Other", value: "other" },
            ]}
            label="Id Card"
            name="idCard"
          />
        </Grid>
        <Grid size={4}>
          <FormInput
            label="ID Number"
            rules={formValidation["idNumber"]}
            name="idNumber"
          />
        </Grid>
      </Grid>
    </Box>
  );
};
export default Step2;
