import { Box, Button } from "@mui/material";

interface FormFooterPropsTypes {
  onNext: ()=>void;
  onPreview: ()=>void;
  disableNext?:boolean
  disablePreview?:boolean
  nextLabel:"Next"|"Submit"
  previewLabel:"Preview"
}
const FormFooter = ({nextLabel,previewLabel, onNext,disableNext,disablePreview,onPreview }: FormFooterPropsTypes) => {
  return (
    <Box
      sx={{ width: "100%", display: "flex", justifyContent: "space-between",  }}
    >
      <Button
        disabled={disablePreview}
        onClick={onPreview}
      >
        {previewLabel}
      </Button>
      <Button
                  variant={nextLabel==="Submit"?"contained":"text"}

        disabled={disableNext}
        onClick={onNext}
      >
        {nextLabel}
      </Button>
    </Box>
  );
};
export default FormFooter;
