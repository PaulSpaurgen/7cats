"use client"

import { Flex, Box, Input, Button } from "@chakra-ui/react"

export default function Footer (){
    return (
        <Flex w="100%" justifyContent="space-between" p="3.5" bgColor="#333333" px="10" color="white" flexWrap="wrap" >
            <Flex gap="2.5" fontSize="md" fontWeight="400">
                <a>About </a>
                <a>Services</a>
                <a>Contact Us</a>
                <a>Shop</a>
            </Flex>
            <Box mt={{base:"2",sm:"4"}}>
                <Input type="text" borderRadius="xl" placeholder="Your Email address" mb={{base:"2",sm:"6"}} />
                <Button variant='outline' colorScheme='white' borderRadius="xl"  > SUBSCRIBE NOW  </Button>

            </Box>

        </Flex>
    )
}