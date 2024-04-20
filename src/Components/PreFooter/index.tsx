"use client";
import { Flex, Box, Text } from "@chakra-ui/react";
import Cards from "./Cards";
import { staticAssets } from "@/Utills/staticAssets";

export default function PreFooter() {
  return (
    <Flex
      mt="5vh"
      mr={{ sm: "0px", lg: "0px", xl: "29px" }}
      gap="30px"
      w="100%"
      justifyContent="center"
      flexWrap={{ base: "wrap", sm: "wrap", lg: "wrap", xl: "nowrap" }}
      mb="20px"
    >
      <Box>
        <Flex flexWrap="wrap" justifyContent="center">
          <Box>
            <Cards src={staticAssets.prefooter1} isFilter={true} />
          </Box>
          <Box>
            <Cards src={staticAssets.prefooter1} isFilter={false} />
          </Box>
        </Flex>
        <Box textAlign="center" w="100%" mt="36px">
          <Text fontSize="3xl" fontWeight="500">
            Afzal Minhaaj
          </Text>
          <Text fontSize="lg" fontWeight="500">
            Guitarist
          </Text>
        </Box>
      </Box>
      <Box>
        <Flex flexWrap="wrap" justifyContent="center">
          <Box>
            <Cards src={staticAssets.prefooter2} isFilter={true} />
          </Box>
          <Box>
            <Cards src={staticAssets.prefooter2} isFilter={false} />
          </Box>
        </Flex>
        <Box textAlign="center" w="100%" mt="36px">
          <Text fontSize="3xl" fontWeight="500">
            Afzal Minhaaj
          </Text>
          <Text fontSize="lg" fontWeight="500">
            Guitarist
          </Text>
        </Box>
      </Box>
    </Flex>
  );
}
