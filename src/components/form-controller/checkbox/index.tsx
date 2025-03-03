import {
  Checkbox,
  CheckboxProps,
  FormControlLabel,
  FormHelperText,
} from "@mui/material";
import {
  Controller,
  type FieldPath,
  type FieldValues,
  useFormContext,
  UseControllerProps,
} from "react-hook-form";
interface IFormCheckboxProps<TFieldValues extends FieldValues>
  extends CheckboxProps {
  name: FieldPath<TFieldValues>;
  rules?: UseControllerProps["rules"];
  label?: string;
}
export const FormCheckbox = <T extends Record<string, unknown>>({
  name,
  label,
  ...rest
}: IFormCheckboxProps<T>) => {
  const methods = useFormContext();

  const { control } = methods;

  return (
    <Controller
      control={control}
      name={name}
      rules={rest?.rules}
      render={({ field: { onChange, value }, formState: { errors } }) => (
        <>
          <FormControlLabel
          
            id={name}
            onChange={onChange}
            checked={value}
            control={<Checkbox     />}
            label={label}
          />
          {!!errors[name] && <FormHelperText sx={{color:"#d32f2f"}} >Required</FormHelperText>}
        </>
      )}
    />
  );
};

export default FormCheckbox;
