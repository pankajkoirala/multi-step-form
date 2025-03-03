import FormInput from "../components/form-controller/input";
import {  InputAdornment } from "@mui/material";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import FormCheckbox from "../components/form-controller/checkbox";
import FormTextArea from "../components/form-controller/text-area";
import HomeIcon from "@mui/icons-material/Home";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { formValidation } from "../schema/formValidation";
const Step4 = () => {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid size={6}>
          <FormInput
            rules={formValidation["reciverName"]}
            label="Reciver Name"
            name="reciverName"
          />
        </Grid>

        <Grid size={6}>
          <FormInput
            label="Reciver Address"
            rules={formValidation["reciverAddress"]}
            startAdornment={
              <InputAdornment position="start">
                <HomeIcon />
              </InputAdornment>
            }
            name="reciverAddress"
          />
        </Grid>
        <Grid size={6}>
          <FormInput
            type="date"
            label="Date of delivery"
            rules={formValidation["dateOfDelivery"]}
            startAdornment={
              <InputAdornment position="start">
                <CalendarMonthIcon />
              </InputAdornment>
            }
            name="dateOfDelivery"
          />
        </Grid>
        <Grid size={6}>
          <FormInput
            label="Reciver Mobile no"
            rules={formValidation["reciverMobileNo"]}
            startAdornment={
              <InputAdornment position="start">
                <PhoneAndroidIcon />
              </InputAdornment>
            }
            name="reciverMobileNo"
          />
        </Grid>

        <Grid size={12}>
          <FormTextArea
            rules={formValidation["message"]}
            minRows={4}
            placeholder="Please enter message "
            label="Message"
            name="message"
          />
        </Grid>
        <Grid size={12}>
          <FormCheckbox
            rules={formValidation["agree"]}
            label=" hereby declare that all the information provided in this form is true, accurate, and complete to the best of my knowledge. I understand that any false or misleading information may result in legal or administrative action by the relevant authorities."
            name="agree"
          />
        </Grid>

       
      </Grid>
    </Box>
  );
};
export default Step4;
