import {
  Controller,
  type FieldPath,
  type FieldValues,
  useFormContext,
  UseControllerProps,
} from "react-hook-form";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";

interface IFormInputProps<TFieldValues extends FieldValues> {
  name: FieldPath<TFieldValues>;
  rules?: UseControllerProps["rules"];
  label?: string;
  options:{label:string,value:string}[]
  onExtraEvent?:()=>void
}

export const FormSelect = <T extends Record<string, unknown>>({
  name,
  label,
  options,
  onExtraEvent,
  ...rest
}: IFormInputProps<T>) => {
  const methods = useFormContext();

  const {
    formState: { errors },
    clearErrors,
    control,
    
  } = methods;

  return (
    <Controller
      name={name}
      rules={rest.rules}
      control={control}
      render={({ field: { onChange, value } }) => (
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">{label}</InputLabel>
            <Select
            error={!!errors[name]}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              key={name}
              label={label}
              onChange={(e) => {
                onChange(e);

                if (errors[name]?.type === "required") {
                  clearErrors(name);
                }
                if (onExtraEvent) {
                  onExtraEvent()
                }
              }}
              value={value ? value : ""}
              {...rest}
            >
              {options?.map((e)=>(
                <MenuItem key={e?.value??""} value={e?.value??""}>{e?.label}</MenuItem>
              ))}
              
           
            </Select>
          </FormControl>
      )}
    />
  );
};

export default FormSelect;
