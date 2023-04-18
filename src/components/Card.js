import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack
      backgroundColor="white"
      borderRadius="10px"
      color="black"
      align="flex-start"
    >
      <HStack>
        <Image borderRadius="10px" src={imageSrc} />
      </HStack>
      <Heading paddingLeft="1.5rem" paddingTop="1rem" as="h4">
        {title}
      </Heading>
      <Text paddingLeft="1.5rem" color="GrayText" fontSize="md">
        {description}
      </Text>
      <Text paddingLeft="1.5rem" paddingBottom="1rem" fontWeight="bold">
        See More <FontAwesomeIcon icon={faArrowRight} />
      </Text>
    </VStack>
  );
};

export default Card;
