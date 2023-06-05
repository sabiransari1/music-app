import "./App.css";
import { useColorModeValue, Box } from "@chakra-ui/react";
import { AllRoutes } from "./components/AllRoutes";
import { Navbar } from "./components/Navbar";

function App() {
  const bgColor = useColorModeValue("white", "black");
  const color = useColorModeValue("black", "white");

  return (
    <Box bgColor={bgColor} color={color}>
      <Navbar />
      <AllRoutes />
    </Box>
  );
}

export default App;
