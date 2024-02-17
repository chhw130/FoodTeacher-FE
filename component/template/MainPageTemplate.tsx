import React from "react";
import TodayReportCard from "../card/TodayReportCard";
import { Flex, HStack, Text, VStack } from "@chakra-ui/react";

const MainPageTemplate = () => {
  return (
    <Flex flexDir={"column"} w={"100%"} gap={"16px"} padding={"0 15px"}>
      <TodayReportCard bgColor={"#f4f4f4"}>
        <VStack spacing={"12px"} alignItems={"flex-start"}>
          <Text color={"#00CE84"}>기본 정보</Text>
          <HStack spacing={"32px"}>
            <Text color={"#959595"} w={"67px"}>
              성별
            </Text>
            <Text fontWeight={"semibold"} color={"#2F2F2F"}>
              {/* {loginUserInfo?.gender || userData?.gender || ""} */}
            </Text>
          </HStack>
          <HStack spacing={"32px"}>
            <Text color={"#959595"} w={"67px"}>
              나이
            </Text>
            <Text fontWeight={"semibold"} color={"#2F2F2F"}>
              {/* {loginUserInfo?.age || userData?.age || ""} */}
            </Text>
          </HStack>
        </VStack>
      </TodayReportCard>

      <TodayReportCard bgColor={"#f4f4f4"}>
        <VStack spacing={"12px"} alignItems={"flex-start"}>
          <Text color={"#00CE84"}>신체 정보</Text>
          <HStack spacing={"32px"}>
            <Text color={"#959595"} w={"67px"}>
              키
            </Text>
            <Text fontWeight={"semibold"} color={"#2F2F2F"}>
              {/* {loginUserInfo?.height || userData?.height || ""} */}
            </Text>
          </HStack>
          <HStack spacing={"32px"}>
            <Text color={"#959595"} w={"67px"}>
              체중
            </Text>
            <Text fontWeight={"semibold"} color={"#2F2F2F"}>
              {/* {loginUserInfo?.weight || userData?.weight || ""} */}
            </Text>
          </HStack>
          <HStack spacing={"32px"}>
            <Text color={"#959595"} w={"67px"}>
              목표 체중
            </Text>
            <Text fontWeight={"semibold"} color={"#2F2F2F"}>
              {/* {loginUserInfo?.target_weight || userData?.target_weight || ""} */}
            </Text>
          </HStack>
        </VStack>
      </TodayReportCard>

      <TodayReportCard bgColor={"#f4f4f4"}>
        <VStack spacing={"12px"} alignItems={"flex-start"}>
          <Text color={"#00CE84"}>오늘 하루 칼로리</Text>
          <Text color={"#2F2F2F"}>
            아침 :{" "}
            {/* {`${loginUserInfo?.breakfast.menu} ${loginUserInfo?.breakfast.calories}` ||
              `${userDiet?.breakfast.menu} ${userDiet?.breakfast.calories}`} */}
            Kcal
          </Text>
          <Text color={"#2F2F2F"}>
            점심 :{" "}
            {/* {`${loginUserInfo?.lunch.menu} ${loginUserInfo?.lunch.calories}` ||
              `${userDiet?.lunch.menu} ${userDiet?.lunch.calories}`}{" "} */}
            Kcal
          </Text>
          <Text color={"#2F2F2F"}>
            저녁 :{" "}
            {/* {`${loginUserInfo?.dinner.menu} ${loginUserInfo?.dinner.calories}` ||
              `${userDiet?.dinner.menu} ${userDiet?.dinner.calories}`}{" "} */}
            Kcal
          </Text>
        </VStack>
      </TodayReportCard>
    </Flex>
  );
};

export default MainPageTemplate;
