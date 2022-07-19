import { Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import React from 'react';

export const Search: React.FC = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <InputGroup size="lg">
      <Input
        // pr="4.5rem"
        type={show ? 'text' : 'password'}
        placeholder="Search for breeds by name"
      />
      <InputRightElement width="4.5rem">
        <Button size="md" onClick={handleClick}>
          {show ? 'Hide' : 'Show'}
        </Button>
      </InputRightElement>
    </InputGroup>
  );
};
