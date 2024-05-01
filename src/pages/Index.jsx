import React from "react";
import { Box, Button, FormControl, FormLabel, Input, Select, VStack, Heading, useToast } from "@chakra-ui/react";

const Index = () => {
  const toast = useToast();

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const driverData = {
      name: formData.get("name"),
      address: formData.get("address"),
      phone: formData.get("phone"),
      vehicle: formData.get("vehicle"),
    };
    console.log(driverData); // You would typically send this data to a server
    toast({
      title: "Driver Registered",
      description: `${driverData.name} has been registered successfully!`,
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Box p={5}>
      <VStack spacing={4} as="form" onSubmit={handleSubmit}>
        <Heading>Register a Driver</Heading>
        <FormControl isRequired>
          <FormLabel htmlFor="name">Name</FormLabel>
          <Input id="name" name="name" type="text" placeholder="Enter driver name" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor="address">Address</FormLabel>
          <Input id="address" name="address" type="text" placeholder="Enter driver address" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor="phone">Phone Number</FormLabel>
          <Input id="phone" name="phone" type="tel" placeholder="Enter driver phone number" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor="vehicle">Vehicle</FormLabel>
          <Select id="vehicle" name="vehicle" placeholder="Select vehicle">
            <option value="car">Car</option>
            <option value="truck">Truck</option>
            <option value="motorcycle">Motorcycle</option>
          </Select>
        </FormControl>
        <Button type="submit" colorScheme="blue" size="lg">
          Register Driver
        </Button>
      </VStack>
    </Box>
  );
};

export default Index;
