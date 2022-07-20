import React from 'react';
import { DropdownIcon, SortAscIcon, SortDescIcon } from '../assets/icons';
import { HStack, IconButton, Select } from '@chakra-ui/react';

interface SortProps {}

export const Sort: React.FC<SortProps> = () => {
  return (
    <HStack w="100%" spacing={2.5}>
      <Select
        icon={<DropdownIcon />}
        iconSize="12px"
        placeholder={`All breeds`}
      >
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </Select>
      <Select
        maxW="115px"
        icon={<DropdownIcon />}
        iconSize="12px"
        placeholder={`Limit: 5`}
      />
      <IconButton aria-label="Sort Desc" icon={<SortDescIcon />} />
      <IconButton aria-label="Sort Asc" icon={<SortAscIcon />} />
    </HStack>
  );
};
