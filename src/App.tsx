import "./App.css";

import { Box } from "@mui/material";

import StepForm from "./step-form";
import SideBar from "./components/side-bar";

function App() {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <SideBar>

      <StepForm />
      </SideBar>
    </Box>
  );
}

export default App;
