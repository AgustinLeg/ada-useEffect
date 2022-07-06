import {
  Button,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

export const LocalStorage = () => {
  const listaStorage = JSON.parse(localStorage.getItem("lista"));

  const [lista, setLista] = useState(listaStorage || []);

  useEffect(() => {
    console.log("cambio lista");
    localStorage.setItem("lista", JSON.stringify(lista));
  }, [lista]);

  const deleteItem = (value) => {
    const filterList = lista.filter((item) => item !== value);
    setLista(filterList);
  };

  return (
    <Stack mt={10}>
      <Heading>Local storage</Heading>
      <Input
        placeholder="agregar item..."
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            setLista([...lista, e.target.value]);
          }
        }}
      />
      <VStack>
        {lista.map((item, index) => (
          <HStack key={index}>
            <Text>{item} </Text>
            <Button onClick={() => deleteItem(item)}>X</Button>
          </HStack>
        ))}
      </VStack>
    </Stack>
  );
};
