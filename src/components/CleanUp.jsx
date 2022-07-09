import { Button, Heading } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";

export const CleanUp = () => {
  // const date = new Date(); ERROR
  const [saludo, setSaludo] = useState("TITULOOOO");
  const [hora, setHora] = useState(new Date().toLocaleTimeString());
  // setInterval(() => {
  //   console.log("hola");
  // }, 5000);

  useEffect(() => {
    const interval = setInterval(() => {
      setHora(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  // useEffect(() => {
  //   // const timer = setTimeout(() => {
  //   //   setSaludo("nuevo saludo");
  //   // }, 3000);
  //   console.log("Use Effect");

  //   return () => {
  //     console.log("CLEAN");
  //     // clearTimeout(timer);
  //   };
  // }, []);

  return (
    <>
      <Heading textAlign="center">CleanUp useEffect</Heading>
      <Heading>{saludo}</Heading>
      <Heading>{hora}</Heading>

      <Button onClick={() => setSaludo("hola")}>cambiar saludo</Button>
    </>
  );
};
