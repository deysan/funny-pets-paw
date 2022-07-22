import api from '../config';
import React, { useEffect, useState } from 'react';
import { Breed } from '../models';
import { DropdownIcon, SortAscIcon, SortDescIcon } from './icons';
import { HStack, IconButton, Select } from '@chakra-ui/react';
import { Params } from '../pages/breeds';

interface SortProps {
  params: Params | undefined;
  setParams: React.Dispatch<React.SetStateAction<Params>> | undefined;
}

export const Sort: React.FC<SortProps> = ({ params, setParams }) => {
  const [options, setOptions] = useState<Breed[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setParams &&
      setParams((prevState) => ({
        ...prevState,
        [event.target.name]: event.target.value,
        page: 0,
      }));
  };

  const handleClickDesc = () => {
    setParams &&
      setParams((prevState) => ({
        ...prevState,
        order: prevState.order !== 'desc' ? 'desc' : 'random',
        page: 0,
      }));
  };

  const handleClickAsc = () => {
    setParams &&
      setParams((prevState) => ({
        ...prevState,
        order: prevState.order !== 'asc' ? 'asc' : 'random',
        page: 0,
      }));
  };

  useEffect(() => {
    api.get<Breed[]>('/breeds').then((res) => setOptions(res.data));
  }, []);

  return (
    <HStack w="100%" spacing={2.5}>
      <Select
        variant="secondary"
        icon={<DropdownIcon />}
        iconColor="var(--color-bg-text)"
        iconSize="12px"
        name="breed_ids"
        value={params?.breed_ids}
        onChange={handleChange}
      >
        <>
          <option value="">All</option>
          {options?.map((breed) => (
            <option value={breed.id} key={breed.name}>
              {breed.name}
            </option>
          ))}
        </>
      </Select>
      <Select
        variant="secondary"
        maxW="115px"
        icon={<DropdownIcon />}
        iconColor="var(--color-bg-text)"
        iconSize="12px"
        name="limit"
        onChange={handleChange}
      >
        <option value="5">Limit: 5</option>
        <option value="10">Limit: 10</option>
        <option value="15">Limit: 15</option>
        <option value="20">Limit: 20</option>
      </Select>
      <IconButton
        variant="info"
        aria-label="Sort Desc"
        icon={<SortDescIcon />}
        onClick={handleClickDesc}
        isActive={params?.order === 'desc'}
      />
      <IconButton
        variant="info"
        aria-label="Sort Asc"
        icon={<SortAscIcon />}
        onClick={handleClickAsc}
        isActive={params?.order === 'asc'}
      />
    </HStack>
  );
};
