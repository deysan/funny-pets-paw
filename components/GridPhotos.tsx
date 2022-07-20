import { Center, Grid, GridItem } from '@chakra-ui/react';
import React from 'react';

interface GridPhotosProps {}

export const GridPhotos: React.FC<GridPhotosProps> = () => {
  return (
    <Grid autoRows="140px" templateColumns="repeat(3, 1fr)" gap={5}>
      <>
        <GridItem rowSpan={2} bg="tomato">
          <Center>1</Center>
        </GridItem>
        <GridItem bg="papayawhip">
          <Center>2</Center>
        </GridItem>
        <GridItem bg="papayawhip">
          <Center>3</Center>
        </GridItem>
        <GridItem colSpan={2} rowSpan={2} bg="tomato">
          <Center>4</Center>
        </GridItem>
        <GridItem bg="papayawhip">
          <Center>5</Center>
        </GridItem>
      </>
      <>
        <GridItem bg="papayawhip">
          <Center>6</Center>
        </GridItem>
        <GridItem bg="papayawhip">
          <Center>7</Center>
        </GridItem>
        <GridItem rowSpan={2} bg="tomato">
          <Center>8</Center>
        </GridItem>
        <GridItem colSpan={2} rowSpan={2} bg="tomato">
          <Center>9</Center>
        </GridItem>
        <GridItem bg="papayawhip">
          <Center>10</Center>
        </GridItem>
      </>
      <>
        <GridItem rowSpan={2} bg="tomato">
          <Center>11</Center>
        </GridItem>
        <GridItem bg="papayawhip">
          <Center>12</Center>
        </GridItem>
        <GridItem bg="papayawhip">
          <Center>13</Center>
        </GridItem>
        <GridItem colSpan={2} rowSpan={2} bg="tomato">
          <Center>14</Center>
        </GridItem>
        <GridItem bg="papayawhip">
          <Center>15</Center>
        </GridItem>
      </>
      <>
        <GridItem bg="papayawhip">
          <Center>16</Center>
        </GridItem>
        <GridItem bg="papayawhip">
          <Center>17</Center>
        </GridItem>
        <GridItem rowSpan={2} bg="tomato">
          <Center>18</Center>
        </GridItem>
        <GridItem colSpan={2} rowSpan={2} bg="tomato">
          <Center>19</Center>
        </GridItem>
        <GridItem bg="papayawhip">
          <Center>20</Center>
        </GridItem>
      </>
    </Grid>
  );
};
