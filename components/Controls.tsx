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
import { Params } from '../pages/breeds';

interface ControlsProps {
  breedId?: string | string[];
  sort?: boolean;
  upload?: boolean;
  params?: Params;
  setParams?: React.Dispatch<React.SetStateAction<Params>>;
}

export const Controls: React.FC<ControlsProps> = ({
  breedId,
  sort,
  upload,
  params,
  setParams,
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
        {sort && <Sort params={params} setParams={setParams} />}
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
