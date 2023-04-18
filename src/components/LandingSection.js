import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Engr. Abdul Malik!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <Avatar
      size="2xl"
      name="Ryan Florence"
      src="https://bit.ly/ryan-florence"
    />
    <Heading as="h4" size="md">
      {greeting}
    </Heading>
    <VStack>
      <Heading as="h1" size="3xl">
        {bio1}
      </Heading>
      <Heading as="h1" size="3xl">
        {bio2}
      </Heading>
    </VStack>
    <VStack>{bio2}</VStack>
  </FullScreenSection>
);

export default LandingSection;
