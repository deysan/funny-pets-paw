import React from 'react';
import { DropdownIcon, SortAscIcon, SortDescIcon, UpdateIcon } from './icons';
import {
  Box,
  HStack,
  IconButton,
  Select,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';

interface FiltersProps {}

export const Filters: React.FC<FiltersProps> = () => {
  return (
    <SimpleGrid
      columns={2}
      spacingX={5}
      spacingY={2.5}
      p={5}
      bgColor="var(--color-white)"
      // bgColor="var(--color-bg-black)"
      borderRadius={20}
    >
      <Box>
        <Text
          as="span"
          pl={3}
          color="var(--color-bg-text)"
          fontSize="10px"
          fontWeight={500}
          textTransform="uppercase"
        >
          Order
        </Text>
        <Select
          icon={<DropdownIcon />}
          iconColor="var(--color-bg-text)"
          iconSize="12px"
          name="order"
        >
          <option value="random">Random</option>
          <option value="desc">Desc</option>
          <option value="asc">Asc</option>
        </Select>
      </Box>
      <Box>
        <Text
          as="span"
          pl={3}
          color="var(--color-bg-text)"
          fontSize="10px"
          fontWeight={500}
          textTransform="uppercase"
        >
          Type
        </Text>
        <Select
          icon={<DropdownIcon />}
          iconColor="var(--color-bg-text)"
          iconSize="12px"
          name="type"
        >
          <option value="all">All</option>
          <option value="static">Static</option>
          <option value="animated">Animated</option>
        </Select>
      </Box>
      <Box>
        <Text
          as="span"
          pl={3}
          color="var(--color-bg-text)"
          fontSize="10px"
          fontWeight={500}
          textTransform="uppercase"
        >
          Breed
        </Text>
        <Select
          icon={<DropdownIcon />}
          iconColor="var(--color-bg-text)"
          iconSize="12px"
          name="breed"
        >
          <option value="none">None</option>
          <option value="static">Static</option>
          <option value="animated">Animated</option>
        </Select>
      </Box>
      <HStack alignItems="end">
        <Box w="100%">
          <Text
            as="span"
            pl={3}
            color="var(--color-bg-text)"
            fontSize="10px"
            fontWeight={500}
            textTransform="uppercase"
          >
            Limit
          </Text>
          <Select
            icon={<DropdownIcon />}
            iconColor="var(--color-bg-text)"
            iconSize="12px"
            name="limit"
          >
            <option value="5">5 items per page</option>
            <option value="10">10 items per page</option>
            <option value="15">15 items per page</option>
            <option value="20">20 items per page</option>
          </Select>
        </Box>
        <IconButton aria-label="Sort Asc" icon={<UpdateIcon />} />
      </HStack>
    </SimpleGrid>
  );
};
