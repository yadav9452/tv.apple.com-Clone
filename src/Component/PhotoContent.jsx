import React from "react";
import { Box, Heading, Button, Text } from "@chakra-ui/react";
const PhotoContent = () => {
  return (
    <Box height={"800px"} backgroundColor={"rgb(65,122,255)"}>
      <Box
        bgImage={
          "https://eloutput.com/app/uploads-eloutput.com/2021/10/ted-lasso-premier-league.jpg"
        }
        height={"650px"}
        padding={"100px"}
        width={"100%"}
      >
        <Box textAlign={"center"} marginTop={"450px"}>
          <Heading fontSize={"70px"} color={"white"}>
            All Apple Originals.
          </Heading>
          <Heading fontSize={"29px"} color={"white"}>
            Exclusively on Apple TV+. Watch here and on the Apple TV app across
            your devices
          </Heading>
          <Button>Start Free Trial</Button>
          <Text fontSize={"12px"} color={"white"}>
            7 days free, then $4.99/month.
          </Text>
          <Text color={"white"} fontSize={"12px"}>
            Or 3 months free when you buy an eligible Apple device. Some Terms
            apply.Some titles coming later to Apple TV+.
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default PhotoContent;
