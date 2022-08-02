import {
  Box,
  Button,
  Center,
  FormControl,
  Heading,
  IconButton,
  Input,
  Link,
  LinkOverlay,
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
  VisuallyHiddenInput,
  useColorMode,
} from '@chakra-ui/react';
import React, { useMemo, useRef, useState } from 'react';

import { CloseIcon } from './icons';
import Image from 'next/image';
import api from '../config';
import { upload } from '../public/images';
import { user } from '../utils';

interface UploadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const UploadModal: React.FC<UploadModalProps> = ({
  isOpen,
  onClose,
}) => {
  const { colorMode } = useColorMode();
  const inputRef = useRef<HTMLInputElement>(null!);

  const [image, setImage] = useState<File | undefined>(undefined);
  const [dragActive, setDragActive] = useState(false);

  const userId = useMemo(() => user(), []);

  const handleFile = (file: File) => {
    console.log(file);
    setImage(file);
  };

  const handleDrag = function (event: React.DragEvent<HTMLDivElement>) {
    event.preventDefault();
    event.stopPropagation();

    if (event.type === 'dragenter' || event.type === 'dragover') {
      setDragActive(true);
    } else if (event.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = function (event: React.DragEvent<HTMLDivElement>) {
    event.preventDefault();
    event.stopPropagation();

    setDragActive(false);

    if (event.dataTransfer.files && event.dataTransfer.files[0]) {
      handleFile(event.dataTransfer.files[0]);
    }
  };

  const handleChange = function (event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault();

    if (event.target.files && event.target.files[0]) {
      handleFile(event.target.files[0]);
    }
  };

  const handleClick = () => {
    inputRef.current.click();
  };

  const handleUpload = () => {
    const formData = new FormData();
    image && formData.append('file', image);
    formData.append('sub_id', userId);

    api
      .post('/images/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((res) => {
        console.log(res);
      });
    // .finally(() => setLoading(false));
  };

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
          <VisuallyHiddenInput
            type="file"
            accept="image/*,.jpeg,.jpg,.png"
            ref={inputRef}
            onChange={handleChange}
          />
          <Center
            as={Link}
            position="relative"
            height="320px"
            mb={5}
            bgColor={colorMode === 'light' ? 'white' : 'var(--color-bg-black)'}
            borderWidth="2px"
            borderStyle={dragActive ? 'solid' : 'dashed'}
            borderColor={
              colorMode === 'light'
                ? 'var(--color-bg-red)'
                : 'var(--color-black-red)'
            }
            borderRadius="20px"
            transition="all 0.3s"
            zIndex="0"
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
            onClick={handleClick}
          >
            <Center
              position="absolute"
              zIndex="-1"
              opacity={colorMode === 'light' ? 1 : 0.05}
            >
              <Image
                src={upload}
                width="200px"
                height="200px"
                layout="fixed"
                placeholder="blur"
                alt="Upload"
              />
            </Center>
            {!dragActive && (
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
            )}
          </Center>
          {image ? (
            <Button variant="primary" onClick={handleUpload} isActive>
              Upload Photo
            </Button>
          ) : (
            <Text fontSize="20px" color="var(--color-bg-text)">
              No file selected
            </Text>
          )}
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
