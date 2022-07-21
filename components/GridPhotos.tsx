import React from 'react';
import { Center, Grid, GridItem } from '@chakra-ui/react';

interface GridPhotosProps {}

export const GridPhotos: React.FC<GridPhotosProps> = () => {
  const array = Array.from({ length: 20 }, (v, i) => i);

  const doubleCol = [3, 8, 13, 18];
  const doubleRow = [0, 3, 7, 8, 10, 13, 17, 18];

  return (
    <Grid autoRows="140px" templateColumns="repeat(3, 1fr)" gap={5}>
      {array.map((number, index) => (
        <GridItem
          colSpan={doubleCol.includes(index) ? 2 : 1}
          rowSpan={doubleRow.includes(index) ? 2 : 1}
          bg="papayawhip"
          key={number}
        >
          <Center>{number + 1}</Center>
        </GridItem>
      ))}
    </Grid>
  );
};
