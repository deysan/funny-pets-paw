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

interface ControlsProps {
  breedId?: number;
  sort?: boolean;
  upload?: boolean;
}

export const Controls: React.FC<ControlsProps> = ({
  breedId,
  sort,
  upload,
}) => {
  const { back, pathname } = useRouter();

  const path = pathname.replace('/', '').replace(/\/.*/, '');

  return (
    <Box>
      <HStack>
        <IconButton
          aria-label="Back"
          icon={<ArrowIcon />}
          onClick={() => back()}
        />
        <Badge>{path}</Badge>
        {breedId && <Badge>{breedId}</Badge>}
        {sort && <Sort />}
        {upload && (
          <>
            <Spacer />
            <Button leftIcon={<UploadIcon />}>Upload</Button>
          </>
        )}
      </HStack>
    </Box>
  );
};
