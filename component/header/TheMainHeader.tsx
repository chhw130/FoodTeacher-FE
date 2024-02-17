"use client";

import { Box, Flex, Text } from "@chakra-ui/react";
import { usePathname, useRouter } from "next/navigation";
import TextLogoIcon from "../icon/TextLogoIcon";
import UserIcon from "../icon/UserIcon";
import GoBackArrowIcon from "../icon/GoBackArrowIcon";
import { useUser } from "../../utils/hooks/useUser";
import UserDarkIcon from "../icon/UserDarkIcon";

const TheMainHeader = () => {
  const path = usePathname();
  const router = useRouter();
  const { userData } = useUser();

  return (
    <>
      {path !== "/signup" && (
        <Box
          margin={"0 auto"}
          w={"100%"}
          display={"flex"}
          justifyContent={"center"}
        >
          <Flex
            as={"header"}
            position={"absolute"}
            top={"0"}
            padding={"4px 22px"}
            w={"100%"}
            maxW={"420px"}
            margin={"0 auto"}
            h={"52px"}
            alignItems={"center"}
            justifyContent={"space-between"}
            zIndex={1000}
          >
            {path === "/main" && (
              <>
                <TextLogoIcon />
                <Text onClick={() => router.push("/mypage")} cursor={"pointer"}>
                  <UserDarkIcon />
                </Text>
              </>
            )}

            {path === "/detail" && (
              <>
                <Box
                  pos={"absolute"}
                  cursor={"pointer"}
                  onClick={() => router.push("/main")}
                >
                  <GoBackArrowIcon />
                </Box>
                <Text
                  margin={"0 auto"}
                  color={"#FFFFFF"}
                  fontSize={"20px"}
                  fontWeight={"medium"}
                >
                  레포트 상세보기
                </Text>
              </>
            )}
          </Flex>
        </Box>
      )}
    </>
  );
};

export default TheMainHeader;
