import React from 'react';
import { ArrowIcon, UploadIcon } from './icons';
import { Sort } from './Sort';
import { useRouter } from 'next/router';
import {
  Badge,
  Box,
  Button,
  HStack,
  IconButton,
  Spacer,
} from '@chakra-ui/react';
import { Breed } from '../models';

interface ControlsProps {
  breedId?: string | string[];
  sort?: boolean;
  upload?: boolean;
  breeds?: Breed[];
  breedIds?: string;
  setBreedIds?: React.Dispatch<React.SetStateAction<string>>;
  limit?: number;
  setLimit?: React.Dispatch<React.SetStateAction<number>>;
  order?: string;
  setOrder?: React.Dispatch<React.SetStateAction<string>>;
  setCurrentPage?: React.Dispatch<React.SetStateAction<number>>;
}

export const Controls: React.FC<ControlsProps> = ({
  breedId,
  sort,
  upload,
  breeds,
  breedIds,
  setBreedIds,
  limit,
  setLimit,
  order,
  setOrder,
  setCurrentPage,
}) => {
  const { back, pathname } = useRouter();

  const path = pathname.replace('/', '').replace(/\/.*/, '');

  return (
    <Box>
      <HStack>
        <IconButton
          variant="secondary"
          aria-label="Back"
          icon={<ArrowIcon />}
          onClick={() => back()}
        />
        <Badge variant={breedId ? 'secondary' : 'primary'}>{path}</Badge>
        {breedId && <Badge>{breedId}</Badge>}
        {sort && (
          <Sort
            breeds={breeds}
            breedIds={breedIds}
            setBreedIds={setBreedIds}
            limit={limit}
            setLimit={setLimit}
            order={order}
            setOrder={setOrder}
            setCurrentPage={setCurrentPage}
          />
        )}
        {upload && (
          <>
            <Spacer />
            <Button variant="secondary" leftIcon={<UploadIcon />}>
              Upload
            </Button>
          </>
        )}
      </HStack>
    </Box>
  );
};
