"use client"
import { Box, Image, Text } from "@chakra-ui/react";
import { staticAssets } from "@/Utills/staticAssets";
import { IconButton } from "@chakra-ui/react";
import { FaWhatsapp } from "react-icons/fa";

export default function Nav() {
  return (
    <Box>
      <Box
        position="fixed"
        top="0"
        height="10vh"
        bgColor="rgba(255, 255, 255, 0.5)"
        width="100%"
        display="flex"
        padding={{
          base: "6px",
          md: "10px",
          lg: "14px",
        }}
        alignItems="center"
        justifyContent="space-between"
        //   borderBottom="1px solid gray.200"
        boxShadow="sm"
        zIndex="1"
      >
        <Text
          fontSize={{ base: "sm", md: "md", lg: "lg" }}
          fontWeight="bold"
          pl="20px"
        >
          Logo
        </Text>
        <Image src={staticAssets.prfLofo} alt="prfLogo" pr="20px" />
      </Box>
      <IconButton
        aria-label="Search database"
        size="lg"
        position="fixed"
        borderRadius="50%"
        icon={
          <FaWhatsapp
            style={{
              width: "100%",
              objectFit: "cover",
              height: "100%",
            }}
          />
        }
        bottom="5%"
        left="10%"
        colorScheme="whatsapp"
        zIndex="100"
        onClick={()=>{
          window.open("https://wa.me/919963040093")
        }}
      />
    </Box>
  );
}
