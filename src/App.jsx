// import { Button, Heading, HStack, Input } from "@chakra-ui/react";
// import { useState } from "react";
// import { ComponenteA } from "./components/ComponenteA";
// import { ComponenteB } from "./components/ComponenteB";
// import { Contador } from "./components/Contador";
import { Contador2 } from "./components/Contador2";
// import { LocalStorage } from "./components/LocalStorage";
import { Navbar } from "./components/Navbar";

// useEffect

// cuando cambia mi componente padre/superior
// cuando cambiaba prop
// cuando cambiaba state

function App() {
  // const [title, setTitle] = useState();

  return (
    <div>
      <Navbar />
      {/* <Heading>{title}</Heading>
      <Button onClick={() => setTitle("titulo nuevo")}>Cambiar titulo</Button>
      <Input placeholder="buscador" />
      <HStack spacing={10} mt={10}>
        <ComponenteA />
        <ComponenteB />
      </HStack>
      <Contador />
      <LocalStorage /> */}
      <Contador2 />
    </div>
  );
}

export default App;
