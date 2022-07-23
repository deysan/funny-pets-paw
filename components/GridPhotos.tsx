import NextLink from 'next/link';
import React from 'react';
import { Breeds } from '../pages/breeds';
import {
  Badge,
  Box,
  Grid,
  GridItem,
  Image,
  LinkBox,
  LinkOverlay,
  Spinner,
} from '@chakra-ui/react';

interface GridPhotosProps {
  breeds: Breeds[];
  isLoading: boolean;
}

export const GridPhotos: React.FC<GridPhotosProps> = ({
  breeds,
  isLoading,
}) => {
  const doubleCol = [3, 8, 13, 18];
  const doubleRow = [0, 3, 7, 8, 10, 13, 17, 18];

  if (isLoading)
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100%"
      >
        <Spinner />
      </Box>
    );

  return (
    <Grid
      autoRows="140px"
      templateColumns="repeat(3, 1fr)"
      gap={5}
      height="100%"
    >
      {breeds.map((breed, index) => (
        <GridItem
          position="relative"
          colSpan={doubleCol.includes(index) ? 2 : 1}
          rowSpan={doubleRow.includes(index) ? 2 : 1}
          bgColor="papayawhip"
          borderRadius={20}
          role="group"
          key={breed.id}
        >
          <Image
            src={breed.url}
            alt={breed.breeds[0]?.name}
            width="100%"
            height="100%"
            objectFit="cover"
            objectPosition="center"
            borderRadius={20}
          />
          <LinkBox
            position="absolute"
            top="0"
            left="0"
            display="none"
            justifyContent="center"
            alignItems="end"
            width="100%"
            height="100%"
            padding={5}
            bgGradient="linear-gradient(rgba(255,134,142,0.6) 0%, rgba(255,134,142,0.6) 100%)"
            borderRadius={20}
            transition="all 0.3s"
            role="group"
            _groupHover={{ display: 'flex' }}
          >
            <NextLink
              href={'/breeds/' + `${breed.breeds[0]?.id || '#'}`}
              passHref
            >
              <LinkOverlay width="100%">
                <Badge variant="link">{breed.breeds[0]?.name || '?'}</Badge>
              </LinkOverlay>
            </NextLink>
          </LinkBox>
        </GridItem>
      ))}
    </Grid>
  );
};
