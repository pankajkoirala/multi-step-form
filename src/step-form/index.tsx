import { FormProvider, useForm } from "react-hook-form";
import HorizontalLinearStepper from "../components/stepper";

import Step1 from "../forms-components/step-1";
import { useEffect, useState } from "react";
import { FormStep, FormValues } from "../types";
import FormFooter from "../forms-components/form-footer";
import { Box, Button, Grid2 } from "@mui/material";
import Step2 from "../forms-components/step-2";
import Step3 from "../forms-components/step-3";
import Step4 from "../forms-components/step-4";

function StepForm({ defaultValue }: { defaultValue?: FormValues }) {
  const rootMethods = useForm<FormValues>();

  const method1 = useForm<FormValues>({
    mode: "onSubmit",
  });
  const method2 = useForm<FormValues>({
    mode: "onSubmit",
  });
  const method3 = useForm<FormValues>({
    mode: "onSubmit",
  });
  const method4 = useForm<FormValues>({
    mode: "onSubmit",
  });

  const [step, setStep] = useState<FormStep>(1);
  const stepsComponents: Record<FormStep, React.ReactNode> = {
    1: <Step1 rootMethods={rootMethods} />,
    2: <Step2 rootMethods={rootMethods} />,
    3: <Step3 rootMethods={rootMethods} />,
    4: <Step4 rootMethods={rootMethods} />,
  };
  const methodsObj = {
    1: method1,
    2: method2,
    3: method3,
    4: method4,
  };

  const methods = methodsObj[step];

  const onSubmit = (e: FormValues) => {
    
    if (step < 4) {
      setStep((pre) => (pre + 1) as FormStep);
      rootMethods?.reset({
        ...rootMethods.getValues(),
        ...e,
      });
    }
    if (step === 4) {
      console.log(rootMethods?.getValues());
    }
  };

  useEffect(() => {
    if (defaultValue) {
      method2?.reset({
        firstName: defaultValue?.firstName,
        lastName: defaultValue?.lastName,
        gender: defaultValue?.gender,
        nationality: defaultValue?.nationality,
        address: defaultValue?.address,
        mobileNo: defaultValue?.mobileNo,
        idCard: defaultValue?.idCard,
        idNumber: defaultValue?.idNumber,
      });
      method1?.reset({
        brand: defaultValue?.brand,
        state: defaultValue?.state,
        country: defaultValue?.country,
      });
      method3?.reset({
        contactPersonName: defaultValue?.contactPersonName,
        contactPersonMobileNo: defaultValue?.contactPersonMobileNo,
        contactPersonRelation: defaultValue?.contactPersonRelation,
        contactPersonAddress: defaultValue?.contactPersonAddress,
      });
      method4?.reset({
        reciverName: defaultValue?.reciverName,
        reciverAddress: defaultValue?.state,
        reciverMobileNo: defaultValue?.country,
        dateOfDelivery: defaultValue?.dateOfDelivery,
        message: defaultValue?.message,
        agree: defaultValue?.agree,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [defaultValue]);

  const steeperClick = async(index: number) => {
    if (step+1===index||index<step) {
      
      if (index >= step) {
        const isValid = await methods?.trigger(); // सम्पूर्ण फारमलाई validate गर्छ
        if (isValid) {
          setStep((pre) => (pre + 1) as FormStep);
        }
      } else if (index < step) {
        setStep(index as FormStep);
      } 
    }
    
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Box
        sx={{
          fontSize: "24px",
          fontWeight: "bold",
          textAlign: "center",
          p: "16px 0px",
        }}
      >
        Multi Step Form
      </Box>
      <Grid2 container spacing={4}>
        <HorizontalLinearStepper onStepClick={steeperClick} formStep={step} />
        <FormProvider {...methods}>
          <Box
            sx={{ flexGrow: 1 }}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"space-between"}
            minHeight={"400px"}
          >
            {stepsComponents[step]}
            <FormFooter
              nextLabel={step === 4 ? "Submit" : "Next"}
              previewLabel="Preview"
              onNext={methods?.handleSubmit(onSubmit)}
              onPreview={() => {
                setStep((pre) => (pre - 1) as FormStep);
              }}
              disablePreview={step === 1}
            />
          </Box>
        </FormProvider>
      </Grid2>
      <Button
        onClick={() => {
          method1?.reset({
            brand: "550e8400-e29b-41d4-a716-446655440000",
            deviceType: "smartphone",
            deviceName: "9843872664",
            deviceNo: "9843872664",
            country: "550e8400-e29b-41d4-a716-446655440000",
            state: "550e8400-e29b-41d4-a716-446655440006",
            county: "550e8400-e29b-41d4-a716-446655440000",
          });
        }}
      >
        Set Default Value
      </Button>
    </Box>
  );
}

export default StepForm;
