"use client";
import { Flex } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import TheMainHeader from "../../component/header/TheMainHeader";
import { usePathname } from "next/navigation";

const ResponsiveLayout = ({ children }: { children: ReactNode }) => {
  const path = usePathname();

  return (
    <>
      <TheMainHeader />
      <Flex
        as={"main"}
        flexDir={"column"}
        w={"100%"}
        margin={"0 auto"}
        maxW={"420px"}
        height={"100vh"}
        alignItems={"center"}
        bgColor={"transparent"}
        marginTop={path === "/main" ? "56px" : 0}
      >
        {children}
      </Flex>
    </>
  );
};

export default ResponsiveLayout;
