import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  IconButton,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  Spacer,
  Text,
  VStack,
  useColorMode,
} from '@chakra-ui/react';
import { CloseIcon, FavIcon } from './icons';

import React from 'react';

interface UploadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const UploadModal: React.FC<UploadModalProps> = ({
  isOpen,
  onClose,
}) => {
  const { colorMode } = useColorMode();

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="full">
      <ModalOverlay />

      <ModalContent gap={5}>
        <IconButton
          variant="primary"
          aria-label="Close"
          ml="auto"
          icon={<CloseIcon w={5} h={5} />}
          onClick={onClose}
        />

        <Box mb={5}>
          <Heading
            as="h3"
            mb={3}
            fontSize="36px"
            fontWeight={500}
            textAlign="center"
          >
            Upload a .jpg or .png Cat Image
          </Heading>
          <Text fontSize="20px" color="var(--color-bg-text)" textAlign="center">
            Any uploads must comply with the{' '}
            <Link
              href="https://thecatapi.com/privacy"
              isExternal
              color="var(--color-red)"
            >
              upload guidelines
            </Link>{' '}
            or face deletion.
          </Text>
        </Box>

        <Box textAlign="center">
          <Center
            height="320px"
            mb={5}
            bgColor={colorMode === 'light' ? 'white' : 'var(--color-bg-black)'}
            borderWidth="2px"
            borderStyle="dashed"
            borderColor={
              colorMode === 'light'
                ? 'var(--color-bg-red)'
                : 'var(--color-black-red)'
            }
            borderRadius="20px"
          >
            <Text fontSize="20px" color="var(--color-bg-text)">
              <Text
                as="span"
                fontWeight={500}
                color={colorMode === 'light' ? 'var(--color-black)' : 'white'}
              >
                Drag here
              </Text>{' '}
              your file or{' '}
              <Text
                as="span"
                fontWeight={500}
                color={colorMode === 'light' ? 'var(--color-black)' : 'white'}
              >
                Click here
              </Text>{' '}
              to upload
            </Text>
          </Center>
          <Text fontSize="20px" color="var(--color-bg-text)">
            No file selected
          </Text>
          {/* <Button variant="primary" onClick={onClose} isActive>
            Upload Photo
          </Button> */}
        </Box>
        {/* <Box
          p={5}
          width="100%"
          bgColor={colorMode === 'light' ? 'white' : 'var(--color-bg-black)'}
          borderRadius={10}
        >
          <Text color="var(--color-bg-text)">
            Thanks for the Upload - Cat found!
          </Text>
        </Box> */}
      </ModalContent>
    </Modal>
  );
};
