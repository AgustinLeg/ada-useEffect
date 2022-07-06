import { useState, useEffect } from "react";
import { Button, Heading } from "@chakra-ui/react";

export const Contador2 = () => {
  const [count, setCount] = useState(0);
  console.log("renderizado1");

  useEffect(() => {
    console.log("USE EFFECT COUNT", count);
    if (count === 5) {
      document.title = "FELICITACIONES LLEGASTE A 5";
      console.log("Count =", 5);
    }
    if (count >= 10) {
      document.title = "Vite App";
      setCount(0);
    }
  }, [count]);

  // count = 2
  // count = 2
  // count != 2 -> 4

  console.log("renderizado 2");

  return (
    <>
      <Heading>UseEffect</Heading>
      <p>Contador: {count}</p>
      <Button onClick={() => setCount(count + 1)}>Count + 1</Button>
    </>
  );
};
