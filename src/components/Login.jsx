import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { CustomModal } from "./Modal";

export const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = ({ target }) => {
    setValues({
      ...values,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errorsValidate = validate();
    const objKeys = Object.keys(errorsValidate);
    if (objKeys.length === 0) {
      alert("PASO");
      return;
    }
    // no llega a este punto si se cumple la condicion.
    alert("NOOOOO");
  };

  const validate = () => {
    const errors = {};
    if (!values.email.trim().length) {
      errors.email = "Este campo es requerido";
    }
    if (!values.password.trim().length) {
      errors.password = "Este campo es requerido";
    }

    setErrors(errors);
    return errors;
  };

  return (
    <CustomModal
      title="Iniciar Sesion"
      btnText="Login"
      hasOverlay
      hasCloseButton
    >
      <VStack as="form" spacing={10} onSubmit={handleSubmit}>
        <FormControl isInvalid={!!errors.email}>
          <FormLabel htmlFor="emailInput">Email</FormLabel>
          <Input
            type="email"
            id="emailInput"
            name="email"
            value={values.email}
            onChange={(e) => handleChange(e)}
          />
          <FormErrorMessage>{errors.email}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors.password}>
          <FormLabel htmlFor="password">Password</FormLabel>
          <Input
            id="password"
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
          />
          <FormErrorMessage>{errors.password}</FormErrorMessage>
        </FormControl>
        <Button type="submit" w="full" colorScheme="blue">
          Login
        </Button>
      </VStack>
    </CustomModal>
  );
};
