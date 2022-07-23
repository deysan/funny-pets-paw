import React from 'react';
import { ArrowIcon } from './icons';
import { Button, Center, HStack } from '@chakra-ui/react';
import { Params } from '../pages/breeds';

interface PaginationProps {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  pageCount: number;
  limit: number;
  isLoading: boolean;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  setCurrentPage,
  pageCount,
  limit,
  isLoading,
}) => {
  return (
    <Center>
      <HStack spacing={6}>
        <Button
          variant="secondary"
          leftIcon={<ArrowIcon />}
          isDisabled={isLoading || currentPage === 0}
          onClick={() => {
            setCurrentPage((prevState) => prevState - 1);
          }}
        >
          Prev
        </Button>
        <Button
          variant="secondary"
          rightIcon={<ArrowIcon transform="rotate(180deg)" />}
          isDisabled={isLoading || currentPage === pageCount - 1}
          onClick={() => {
            setCurrentPage((prevState) => prevState + 1);
          }}
        >
          Next
        </Button>
      </HStack>
    </Center>
  );
};
