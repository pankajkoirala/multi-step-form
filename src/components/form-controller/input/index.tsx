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
  InputLabel,
  InputProps,
  OutlinedInput,
} from "@mui/material";

interface IFormInputProps<TFieldValues extends FieldValues> extends InputProps {
  name: FieldPath<TFieldValues>;
  rules?: UseControllerProps["rules"];
  label?: string;
}

export const FormInput = <T extends Record<string, unknown>>({
  name,
  type,
  label,
  ...rest
}: IFormInputProps<T>) => {
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
            <InputLabel htmlFor="outlined-label">{label}</InputLabel>
            <OutlinedInput
            key={name}
              id="outlined-label"
              label={label}
              error={!!errors[name]}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {

                if (type === "number") {
                  onChange(Number(e.target.valueAsNumber));
                } else {
                  onChange(e);
                }

                if (errors[name]?.type === "required") {
                  clearErrors(name);
                }
              }}
              type={type}
              value={value ? value : ""}
              {...rest}
            />
          </FormControl>
        </>
      )}
    />
  );
};

export default FormInput;
