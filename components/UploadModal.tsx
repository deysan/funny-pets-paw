import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  IconButton,
  Img,
  Link,
  Modal,
  ModalContent,
  ModalOverlay,
  Text,
  VisuallyHiddenInput,
  useColorMode,
} from '@chakra-ui/react';
import { CloseIcon, ErrorIcon, SuccessIcon } from './icons';
import React, { useMemo, useRef, useState } from 'react';

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
  const [preview, setPreview] = useState('');
  const [dragActive, setDragActive] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const userId = useMemo(() => user(), []);

  const handleFile = (file: File) => {
    setImage(file);
    setPreview(URL.createObjectURL(file));
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
    if (!image) return;
    setLoading(true);

    const formData = new FormData();
    formData.append('file', image);
    formData.append('sub_id', userId);

    api
      .post('/images/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((res) => {
        if (res.status === 201) {
          setError(false);
          setSuccess(true);
          setImage(undefined);
          setPreview('');
        }
      })
      .catch((error) => {
        setSuccess(false);
        setError(true);
        console.error(error.message);
      })
      .finally(() => setLoading(false));
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
            marginBottom={5}
            paddingX={10}
            paddingY={5}
            bgColor={
              !error && colorMode === 'light'
                ? 'white'
                : error && colorMode === 'light'
                ? 'var(--color-bg-red)'
                : error && colorMode === 'dark'
                ? 'var(--color-black-red)'
                : 'var(--color-bg-black)'
            }
            borderWidth="2px"
            borderStyle={dragActive ? 'solid' : 'dashed'}
            borderColor={
              !error && colorMode === 'light'
                ? 'var(--color-bg-red)'
                : !error && colorMode === 'dark'
                ? 'var(--color-black-red)'
                : 'var(--color-red)'
            }
            borderRadius={20}
            transition="all 0.3s ease"
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
              opacity={dragActive ? 0 : colorMode === 'light' ? 1 : 0.05}
              transition="all 0.3s ease"
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
            {preview ? (
              <Img
                src={preview}
                width="100%"
                height="100%"
                objectFit="cover"
                objectPosition="center"
                borderRadius={10}
                loading="lazy"
                alt="Funny Pet"
              />
            ) : (
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
            <>
              <Text
                mb={5}
                fontSize="20px"
                color="var(--color-bg-text)"
                noOfLines={1}
              >
                Image File Name: {image.name}
              </Text>
              <Button
                variant="red"
                onClick={handleUpload}
                isLoading={isLoading}
              >
                Upload Photo
              </Button>
            </>
          ) : (
            <Text fontSize="20px" color="var(--color-bg-text)">
              No file selected
            </Text>
          )}
        </Box>

        {(success || error) && (
          <Flex
            p={5}
            gap={2.5}
            width="100%"
            alignItems="center"
            bgColor={colorMode === 'light' ? 'white' : 'var(--color-bg-black)'}
            borderRadius={10}
          >
            {success && (
              <>
                <SuccessIcon w={5} h={5} color="var(--color-green)" />
                <Text color="var(--color-bg-text)">
                  Thanks for the Upload - Cat found!
                </Text>
              </>
            )}
            {error && (
              <>
                <ErrorIcon w={5} h={5} color="var(--color-red)" />
                <Text color="var(--color-bg-text)">
                  No Cat found - try a different one
                </Text>
              </>
            )}
          </Flex>
        )}
      </ModalContent>
    </Modal>
  );
};
