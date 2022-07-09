// import { Button, Heading, HStack, Input } from "@chakra-ui/react";
// import { useState } from "react";
// import { ComponenteA } from "./components/ComponenteA";
// import { ComponenteB } from "./components/ComponenteB";
// import { Contador } from "./components/Contador";
import { Button, Stack } from "@chakra-ui/react";
import { useState } from "react";
import { Apis } from "./components/Apis";
import { CleanUp } from "./components/CleanUp";
import { CountDown } from "./components/CountDown";
import { MouseMove } from "./components/MouseMove";
// import { Contador2 } from "./components/Contador2";
// import { LocalStorage } from "./components/LocalStorage";
import { Navbar } from "./components/Navbar";

// useEffect

// cuando cambia mi componente padre/superior
// cuando cambiaba prop
// cuando cambiaba state

function App() {
  // const [title, setTitle] = useState();
  const [show, setShow] = useState(true);

  const toggle = () => setShow(!show);

  return (
    <Stack spacing={16}>
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
      {/* <Contador2 /> */}
      {/* {show && <CleanUp />} */}
      {/* <Button onClick={toggle}>toggle</Button>
      <CountDown initialCount={5} />
      <MouseMove /> */}
      <Apis />
    </Stack>
  );
}

export default App;
