import React from 'react';
import { Grid, GridItem } from '@chakra-ui/react';
import { Breeds } from '../pages/breeds';

interface GridPhotosProps {
  breeds: Breeds[];
}

export const GridPhotos: React.FC<GridPhotosProps> = ({ breeds }) => {
  const doubleCol = [3, 8, 13, 18];
  const doubleRow = [0, 3, 7, 8, 10, 13, 17, 18];

  return (
    <Grid
      height="100%"
      autoRows="140px"
      templateColumns="repeat(3, 1fr)"
      gap={5}
    >
      {breeds.map((breed, index) => (
        <GridItem
          colSpan={doubleCol.includes(index) ? 2 : 1}
          rowSpan={doubleRow.includes(index) ? 2 : 1}
          bgColor="papayawhip"
          bgImage={`url(${breed.url})`}
          bgPosition="center"
          bgSize="cover"
          bgRepeat="no-repeat"
          borderRadius={20}
          key={breed.id}
        ></GridItem>
      ))}
    </Grid>
  );
};
