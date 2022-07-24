import {
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import React from 'react';
import { SearchIcon } from './icons';

export const Search: React.FC = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <InputGroup size="lg">
      <Input type="text" placeholder="Search for breeds by name" />
      <InputRightElement>
        <IconButton
          variant="secondary"
          aria-label="Search"
          icon={<SearchIcon w={5} h={5} />}
        />
      </InputRightElement>
    </InputGroup>
  );
};
