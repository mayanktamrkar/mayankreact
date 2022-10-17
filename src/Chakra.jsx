import React from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,InputGroup,Button,InputRightElement,
  Select,
} from "@chakra-ui/react";

const Chakra = () => {
    const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)
  return (
    <div>
      <FormControl isRequired>
        <FormLabel>First name</FormLabel>
        <Input placeholder="First name" />
        <FormLabel>Email address</FormLabel>
        <Input type="email" />
        <FormLabel>Country</FormLabel>
        <Select  spacing={3} placeholder="Select country">
          <option>United Arab Emirates</option>
          <option>Nigeria</option>
        </Select>
        <InputGroup  spacing={3} size='md'>
      <Input
        pr='4.5rem'
        type={show ? 'text' : 'password'}
        placeholder='Enter password'
      />
      <InputRightElement width='4.5rem'>
        <Button h='1.75rem' size='sm' onClick={handleClick}>
          {show ? 'Hide' : 'Show'}
        </Button>
      </InputRightElement>
    </InputGroup>
      </FormControl>
    </div>
  );
};

export default Chakra;
