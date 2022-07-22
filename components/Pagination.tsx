import React from 'react';
import { ArrowIcon } from './icons';
import { Button, Center, HStack } from '@chakra-ui/react';
import { Params } from '../pages/breeds';

interface PaginationProps {
  params: Params;
  setParams: React.Dispatch<React.SetStateAction<Params>>;
  paginationCount: string;
  isLoading: boolean;
}

export const Pagination: React.FC<PaginationProps> = ({
  params,
  setParams,
  paginationCount,
  isLoading,
}) => {
  return (
    <Center>
      <HStack spacing={6}>
        <Button
          variant="secondary"
          leftIcon={<ArrowIcon />}
          isDisabled={isLoading || params.page === 0}
          onClick={() => {
            setParams((prevState) => ({
              ...prevState,
              page: params.page - 1,
            }));
          }}
        >
          Prev
        </Button>
        <Button
          variant="secondary"
          rightIcon={<ArrowIcon transform="rotate(180deg)" />}
          isDisabled={
            isLoading ||
            Number(paginationCount) / Number(params.limit) === params.page + 1
          }
          onClick={() => {
            setParams((prevState) => ({
              ...prevState,
              page: params.page + 1,
            }));
          }}
        >
          Next
        </Button>
      </HStack>
    </Center>
  );
};
