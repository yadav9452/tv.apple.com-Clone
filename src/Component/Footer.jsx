import { Box, Flex, Stack, Text, useColorModeValue } from "@chakra-ui/react";

export default function SmallWithSocial() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
      marginTop="2rem"
    >
      <Flex justify={"space-between"}>
        <Text> Copyright © 2022 Apple Inc. All rights reserved</Text>
        <Text>United States</Text>
      </Flex>
      <Flex justify={"space-between"} width={"40%"}>
        <Text> Internet Services Terms</Text>
        <Text>Apple Tv & Privacy</Text>
        <Text>Cookie Waring</Text>
        <Text>Support</Text>
      </Flex>
      <Stack direction={"row"} spacing={6}></Stack>
    </Box>
  );
}
