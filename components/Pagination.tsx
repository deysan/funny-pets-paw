import { Button, Center, HStack } from '@chakra-ui/react';
import React from 'react';
import { ArrowIcon } from './icons';

export const Pagination: React.FC = () => {
  return (
    <Center>
      <HStack spacing={6}>
        <Button variant="secondary" leftIcon={<ArrowIcon />} isDisabled>
          Prev
        </Button>
        <Button
          variant="secondary"
          rightIcon={<ArrowIcon transform="rotate(180deg)" />}
        >
          Next
        </Button>
      </HStack>
    </Center>
  );
};
