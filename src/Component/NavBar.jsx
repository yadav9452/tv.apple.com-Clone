import {
  Box,
  Flex,
  Button,
  Stack,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import { BsFillPersonFill } from "react-icons/bs";
import { Link as RouterLink } from "react-router-dom";
import SignIn from "../Pages/SignIn";

export default function WithSubnavigation() {
  return (
    <Box>
      <Flex
        bg={useColorModeValue("black")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1 }}
          justify={{ base: "center", md: "start" }}
          height={"50px"}
          // marginLeft={"40px"}
        >
          <Link as={RouterLink} to="/">
            <img
              src="https://deadline.com/wp-content/uploads/2021/03/apple-tv-plus-logo-on-blk.png"
              alt="logo"
              width={"100px"}
              height={"100px"}
            />
          </Link>

          <Flex display={{ base: "none", md: "flex" }} ml={10}></Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <Link as={RouterLink} to="/signin">
            <Button
              display={{ base: "none", md: "inline-flex" }}
              fontSize={"sm"}
              fontWeight={600}
              color={"white"}
              bg={"rgb(65,122,255)"}
              href={"#"}
              marginRight={"20px"}
              width={"100px"}
              height={"30px"}
              _hover={{
                bg: "rgb(65,122,255)",
              }}
            >
              <BsFillPersonFill /> Sign In
            </Button>
          </Link>
        </Stack>
      </Flex>
    </Box>
  );
}
