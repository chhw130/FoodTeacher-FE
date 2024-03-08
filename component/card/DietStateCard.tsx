import { Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

const DietStateCard = ({ children }: { children: ReactNode }) => {
  return (
    <Flex
      paddingTop={"20px"}
      margin={"0 auto"}
      color={"#F4F4F4"}
      flexDir={"row"}
      borderRadius={"12px"}
    >
      {children}
    </Flex>
  );
};

export default DietStateCard;
