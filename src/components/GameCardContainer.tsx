import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box
      width={{ base: "340px", md: "320px", lg: "280px", xl: "220px" }}
      borderRadius={10}
      overflow={"hidden"}
    >
        {children}
    </Box>
  );
};

export default GameCardContainer;
