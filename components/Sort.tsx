import api from '../config';
import React, { useEffect, useState } from 'react';
import { Breed } from '../models';
import { DropdownIcon, SortAscIcon, SortDescIcon } from './icons';
import { HStack, IconButton, Select } from '@chakra-ui/react';
import { Breeds, Params } from '../pages/breeds';

interface SortProps {
  breeds?: Breeds[];
  breedIds?: string;
  setBreedIds?: React.Dispatch<React.SetStateAction<string>>;
  limit?: number;
  setLimit?: React.Dispatch<React.SetStateAction<number>>;
  order?: string;
  setOrder?: React.Dispatch<React.SetStateAction<string>>;
  setCurrentPage?: React.Dispatch<React.SetStateAction<number>>;
}

export const Sort: React.FC<SortProps> = ({
  breeds,
  breedIds,
  setBreedIds,
  limit,
  setLimit,
  order,
  setOrder,
  setCurrentPage,
}) => {
  const handleChangeBreed = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setBreedIds && setBreedIds(event.target.value);
    // setCurrentPage && setCurrentPage(0);
  };

  const handleChangeLimit = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setLimit && setLimit(Number(event.target.value));
    // setCurrentPage && setCurrentPage(0);
  };

  const handleClickDesc = () => {
    setOrder &&
      setOrder((prevState) => (prevState !== 'desc' ? 'desc' : 'random'));
    // setCurrentPage && setCurrentPage(0);
  };

  const handleClickAsc = () => {
    setOrder &&
      setOrder((prevState) => (prevState !== 'asc' ? 'asc' : 'random'));
    // setCurrentPage && setCurrentPage(0);
  };

  return (
    <HStack w="100%" spacing={2.5}>
      <Select
        variant="secondary"
        icon={<DropdownIcon />}
        iconColor="var(--color-bg-text)"
        iconSize="12px"
        name="breed_ids"
        value={breedIds}
        onChange={handleChangeBreed}
      >
        <>
          <option value="">All</option>
          {breeds?.map((breed) => (
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
        value={limit}
        onChange={handleChangeLimit}
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
        isActive={order === 'desc'}
      />
      <IconButton
        variant="info"
        aria-label="Sort Asc"
        icon={<SortAscIcon />}
        onClick={handleClickAsc}
        isActive={order === 'asc'}
      />
    </HStack>
  );
};
