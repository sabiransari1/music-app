import "./App.css";
import { useColorModeValue, Box } from "@chakra-ui/react";
import { AllRoutes } from "./components/AllRoutes";

function App() {
  const bgColor = useColorModeValue("white", "black");
  const color = useColorModeValue("black", "white");

  return (
    <Box bgColor={bgColor} color={color}>
      <AllRoutes />
    </Box>
  );
}

export default App;
