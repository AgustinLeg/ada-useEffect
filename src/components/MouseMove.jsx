import { Heading } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";

export const MouseMove = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      setPos({
        ...pos,
        x: e.clientX,
        y: e.clientY,
      });
    });

    return () => {
      window.removeEventListener("mousemove", () => {}, true);
    };
  }, []);

  return (
    <div>
      <Heading textAlign="center">Mouse Move</Heading>
      <Heading>X :{pos.x}</Heading>
      <Heading>Y :{pos.y}</Heading>
    </div>
  );
};
