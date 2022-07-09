import { Heading } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

export const CountDown = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log(count);
      if (!count) return clearInterval(interval);
      setCount(count - 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [count]);

  return (
    <div>
      <Heading textAlign="center">Countdown</Heading>
      {count || "Tiempo finalizado 🥳"}
    </div>
  );
};
