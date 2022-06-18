import React from "react";
import { Box, Heading, Flex, Text } from "@chakra-ui/react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
const SignIn = () => {
  return (
    <Box width={"80%"} margin="auto">
      <Box>
        <img
          src="https://1000logos.net/wp-content/uploads/2016/10/Apple_logo_grey.png"
          alt="logo"
          width={"200px"}
          height={"150px"}
        />
      </Box>
      <Text fontWeight={"20px"}>Sign in with your Apple ID</Text>
      <Text fontWeight={"20px"}>
        You will be signed in to Apple TV and Apple Music
      </Text>
      <Flex border={"1px solid black"} width="20%" padding={"10px"}>
        <input type="text" placeholder="Apple ID" />
        <BsFillArrowRightCircleFill />
      </Flex>
    </Box>
  );
};

export default SignIn;
