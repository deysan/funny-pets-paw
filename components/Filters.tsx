import React, { useEffect, useState } from 'react';
import { DropdownIcon, SortAscIcon, SortDescIcon, UpdateIcon } from './icons';
import {
  Box,
  HStack,
  IconButton,
  Select,
  SimpleGrid,
  Text,
  useColorMode,
} from '@chakra-ui/react';
import { Breed, Params } from '../models';
import api from '../config';

interface FiltersProps {
  setParams: React.Dispatch<React.SetStateAction<Params>>;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

export const Filters: React.FC<FiltersProps> = ({
  setParams,
  setCurrentPage,
}) => {
  const { colorMode } = useColorMode();
  const [breeds, setBreeds] = useState<Breed[]>();
  const [filterParams, setFilterParams] = useState<Params>({
    breed_ids: '',
    limit: 5,
    order: 'random',
    mime_types: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterParams((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleClick = () => {
    setParams(filterParams);
    setCurrentPage(0);
  };

  useEffect(() => {
    api.get<Breed[]>('/breeds').then((res) => setBreeds(res.data));
  }, []);

  return (
    <SimpleGrid
      columns={2}
      spacingX={5}
      spacingY={2.5}
      p={5}
      bgColor={
        colorMode === 'light' ? 'var(--color-white)' : 'var(--color-bg-black)'
      }
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
          value={filterParams.order}
          onChange={handleChange}
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
          name="mime_types"
          value={filterParams.mime_types}
          onChange={handleChange}
        >
          <option value="">All</option>
          <option value="jpg,png">Static</option>
          <option value="gif">Animated</option>
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
          name="breed_ids"
          value={filterParams.breed_ids}
          onChange={handleChange}
        >
          <option value="">None</option>
          {breeds?.map((breed) => (
            <option value={breed.id} key={breed.name}>
              {breed.name}
            </option>
          ))}
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
            value={filterParams.limit}
            onChange={handleChange}
          >
            <option value={5}>5 items per page</option>
            <option value={10}>10 items per page</option>
            <option value={15}>15 items per page</option>
            <option value={20}>20 items per page</option>
          </Select>
        </Box>
        <IconButton
          aria-label="Update"
          icon={<UpdateIcon w={5} h={5} />}
          onClick={handleClick}
        />
      </HStack>
    </SimpleGrid>
  );
};
