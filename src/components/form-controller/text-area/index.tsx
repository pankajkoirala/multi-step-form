import {
    Controller,
    type FieldPath,
    type FieldValues,
    useFormContext,
    UseControllerProps,
  } from "react-hook-form";
  import { ChangeEvent } from "react";
  import {
    FormControl,
  } from "@mui/material";
  import Textarea, { TextareaProps } from '@mui/joy/Textarea';



  
  interface IFormTextAreaProps<TFieldValues extends FieldValues> extends TextareaProps {
    name: FieldPath<TFieldValues>;
    rules?: UseControllerProps["rules"];
    label?: string;
  }
  
  export const FormInput = <T extends Record<string, unknown>>({
    name,
    ...rest
  }: IFormTextAreaProps<T>) => {
    const methods = useFormContext();
  
    const {
      clearErrors,
      control,
    } = methods;
  
    return (
      <Controller
        name={name}
        rules={rest.rules}
        control={control}
        render={({ field: { onChange, value, },formState:{errors} }) => (
          <>
            <FormControl fullWidth>
              <Textarea      sx={{ minHeight: 100 }}

              
                error={!!errors[name]}
                onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
  
                
                    onChange(e);
  
                  if (errors[name]?.type === "required") {
                    clearErrors(name);
                  }
                }}
                {...rest}
                value={value ? value : ""}
              />
            </FormControl>
          </>
        )}
      />
    );
  };
  
  export default FormInput;
  