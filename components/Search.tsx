import React, { useCallback, useState } from 'react';
import { SearchIcon } from './icons';
import { useRouter } from 'next/router';
import {
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';

export const Search: React.FC = () => {
  const router = useRouter();

  const [search, setSearch] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleClick = useCallback(() => {
    router.push(`/search/${search}`);
    setSearch('');
  }, [router, search]);

  return (
    <InputGroup size="lg">
      <Input
        type="text"
        placeholder="Search for breeds by name"
        value={search}
        onChange={handleChange}
      />
      <InputRightElement>
        <IconButton
          variant="secondary"
          aria-label="Search"
          icon={<SearchIcon w={5} h={5} />}
          onClick={handleClick}
          isDisabled={!search}
        />
      </InputRightElement>
    </InputGroup>
  );
};
