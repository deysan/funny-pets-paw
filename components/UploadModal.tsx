import {
  Button,
  Center,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from '@chakra-ui/react';

import React from 'react';

interface UploadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const UploadModal: React.FC<UploadModalProps> = ({
  isOpen,
  onClose,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Heading as="h3" fontSize="36px" fontWeight={500} textAlign="center">
            Upload a .jpg or .png Cat Image
          </Heading>
        </ModalHeader>

        <ModalCloseButton />

        <ModalBody>
          <Text>
            Any uploads must comply with the upload guidelines or face deletion.
          </Text>
        </ModalBody>

        <ModalFooter>
          <Button variant="primary" mr={3} onClick={onClose} isActive>
            Upload Photo
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
