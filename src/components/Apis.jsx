import {
  Button,
  Heading,
  Spinner,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

export const Apis = () => {
  const [pokemons, setPokemons] = useState([]);
  const [offset, setOffset] = useState(1);
  const [next, setNext] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    // GET
    fetch(next || `https://pokeapi.co/api/v2/pokemon-species?limit=3&offset=1`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPokemons([...pokemons, ...data.results]);
        setNext(data.next);
        setIsLoading(false);
      });
  }, [offset]);

  // console.log(pokemons);
  // const array1 = [1, 2, 3];
  // const array2 = [4, 5, 6];

  // [1,2,3,4,5,6] copia de arrays
  // const array3 = [...array1, ...array2];

  const handleClick = () => {
    // setNext(pokemons.next);
    setOffset(offset + 4);
  };

  return (
    <Stack>
      <Heading textAlign="center">APIS</Heading>
      <VStack>
        {isLoading && <Spinner />}

        {pokemons.map((item) => (
          <Text key={item.url}>{item.name}</Text>
        ))}
        <Button onClick={handleClick}>Ver mas</Button>
      </VStack>
    </Stack>
  );
};
