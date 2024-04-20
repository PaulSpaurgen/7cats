"use client"
import { Box, Image, Text } from "@chakra-ui/react";
import { staticAssets } from "@/Utills/staticAssets";
import Info from "./Info";

export default function Hero() {
  return (
    <Box bgColor="white" pt="10vh">
      <Box w="100%" h="30vh" position="relative" mb="5vh" cursor="pointer" onClick={()=>{
            window.open("https://calendly.com/","_blank")
      }} >
        <Image
          src={staticAssets.hero1}
          alt="hero-1"
          w="100%"
          h="100%"
          objectFit="cover"
          zIndex="-1"
          __css={{
            filter: " blur(0.5px) contrast(80%) ",
          }}
          
        />
        <Text
          position="absolute"
          top="50%"
          left="50%"
        //   fontSize="5xl"
          fontSize={{ base: "2xl", md: "3xl" , lg:"5xl" }}
          fontWeight="600"
          color="white"
          transform="translate(-50%, -50%)"
        >
          Book a Session
        </Text>
      </Box>
      <Box w="100%" h="30vh" position="relative" mb="5vh" cursor="pointer" >
        <Image
          src={staticAssets.hero2}
          alt="hero-1"
          w="100%"
          h="100%"
          objectFit="cover"
          zIndex="-1"
          __css={{
            filter: " blur(0.5px) contrast(80%) ",
          }}
        />
        <Text
          position="absolute"
          top="50%"
          left="50%"
          fontSize={{ base: "2xl", md: "3xl" , lg:"5xl" }}
          fontWeight="600"
          color="white"
          transform="translate(-50%, -50%)"
        >
          Mix and Master 
        </Text>
      </Box>
      <Box w="100%" h="30vh" position="relative" cursor="pointer" >
        <Image
          src={staticAssets.hero3}
          alt="hero-1"
          w="100%"
          h="100%"
          objectFit="cover"
          zIndex="-1"
          __css={{
            filter: " blur(0.5px) contrast(80%) ",
          }}
          
        />
        <Text
          position="absolute"
          top="50%"
          left="50%"
          fontSize={{ base: "2xl", md: "3xl" , lg:"5xl" }}
          fontWeight="600"
          color="white"
          transform="translate(-50%, -50%)"
        >
          Courses
        </Text>
      </Box>
      <Info/>
    </Box>
  );
}
