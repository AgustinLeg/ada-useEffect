import { Button, Heading, HStack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export const Contador = () => {
  const [counter, setCounter] = useState(50);
  const [title, setTitle] = useState("Titulo");

  // console.log("antes del useEffect");
  useEffect(() => {
    // Si no coloco una dependecia se ejecuta siempre
    console.log("useEffect basico");
  });

  useEffect(() => {
    // solo se ejecuta 1 vez
    console.log("se ejecuta 1 vez");
  }, []);

  useEffect(() => {
    // Se ejecuta cuando cambia mi dependencia
    console.log("useEffect con dependencias", counter);
    document.title = `${title} = ${counter}`;
  }, [counter]);

  // Bucle infinito 💣
  // useEffect(() => {
  //   setCounter(counter + 1);
  // }, [counter]);

  // useEffect(() => {
  //   console.log("CAMBIO TITULO");
  //   setTitle("useEffect title");
  // }, [title]);

  // console.log("Despues useEffect");

  // console.log("cambio titulo sin useEffect");

  return (
    <>
      <Heading>{title}</Heading>
      <Button onClick={() => setTitle("Nuevo titulo")}>cambiar titulo</Button>
      <HStack mt={10}>
        <Text>{counter}</Text>
        <Button
          onClick={() => {
            setCounter(counter - 1);
          }}
        >
          - 1
        </Button>
        <Button
          onClick={() => {
            setCounter(counter + 1);
          }}
        >
          + 1
        </Button>
        <Button
          onClick={() => {
            setCounter(counter + 2);
          }}
        >
          + 2
        </Button>
        <Button
          onClick={() => {
            setCounter(counter + 3);
          }}
        >
          + 3
        </Button>
      </HStack>
    </>
  );
};
