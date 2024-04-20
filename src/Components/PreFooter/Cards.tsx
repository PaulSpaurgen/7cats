import { Box, Img } from "@chakra-ui/react";

export default function Cards({
  src,
  isFilter,
}: {
  src: string;
  isFilter: Boolean;
}) {
  return (
    <Box w="300px" cursor="pointer" position="relative">
      <Img src={src} alt="disp" borderTopRadius="9px" w="100%" />
      {isFilter && (
        <Box
          position="absolute"
          top="0"
          left="0"
          w="100%"
          h="100%"
          bgColor="rgba(255, 255, 255, 0.5)"
        />
      )}
    </Box>
  );
}
