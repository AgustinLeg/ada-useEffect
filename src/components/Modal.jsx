import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";

export const CustomModal = ({
  children,
  title,
  hasOverlay,
  hasCloseButton,
  btnText,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>{btnText}</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        {hasOverlay && <ModalOverlay />}
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          {hasCloseButton && <ModalCloseButton />}
          <ModalBody>{children}</ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
