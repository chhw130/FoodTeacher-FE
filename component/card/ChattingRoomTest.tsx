"use client";
import {
  Box,
  Divider,
  Flex,
  HStack,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import ChattingMsgCard from "./ChattingMsgCard";
import DietChattingMsgCart from "./DietChattingMsgCard";
import ChattingInput from "../input/ChattingInput";
import HealthIcon from "../icon/HealthIcon";
import UserChattingMsgCard from "./UserChattingMsgCard";
import {} from "react-hook-form";
import { DietResponse } from "../../utils/api/AxiosSetting";
import RunningIcon from "../icon/RunningIcon";
import { useEffect, useRef } from "react";

export interface DietMsgType {
  msg: string;
}

interface ChattingRoomPropsType {
  chattingData: string;
  isLoading: boolean;
  dietResponseData: DietResponse | undefined;
}

const ChattingRoomTest = ({
  isLoading,
  dietResponseData,
  chattingData,
}: ChattingRoomPropsType) => {
  const messageEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (messageEndRef.current) {
      messageEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [dietResponseData]);

  return (
    <>
      <VStack
        w={"100%"}
        h={"100%"}
        alignItems={"flex-start"}
        spacing={"16px"}
        marginTop={"16px"}
      >
        <ChattingMsgCard>반갑습니다 00님</ChattingMsgCard>
        <ChattingMsgCard>
          자, 오늘은 어떤 음식을 드셨나요?
          <br />
          아침, 점심, 저녁 메뉴를 알려주세요
          <Text as={"h2"} color={"#787878"} fontSize={"16px"} lineHeight={2}>
            {"ex) 아침은 00 점심은 00 저녁은 00을 먹었어"}
          </Text>
        </ChattingMsgCard>
        {chattingData && (
          <UserChattingMsgCard>{chattingData}</UserChattingMsgCard>
        )}

        <DietChattingMsgCart
          isLoading={isLoading}
          dietResponseData={dietResponseData}
        />

        {dietResponseData && (
          <>
            <ChattingMsgCard>
              <HStack spacing={"5px"}>
                {!dietResponseData.운동필요시간.includes("안 해도") ? (
                  <>
                    <RunningIcon />
                    <Text as="a" color={"#00C27C"} fontWeight={"semibold"}>
                      {dietResponseData.운동필요시간}
                    </Text>
                    이상 꼭 하셔야해요.
                  </>
                ) : (
                  <>
                    <Text as="a" color={"#00C27C"} fontWeight={"semibold"}>
                      운동을 {dietResponseData.운동필요시간}
                    </Text>
                  </>
                )}
              </HStack>
            </ChattingMsgCard>
            <ChattingMsgCard>{dietResponseData.잔소리}</ChattingMsgCard>
          </>
        )}
        <Box ref={messageEndRef} />
      </VStack>
    </>
  );
};

export default ChattingRoomTest;
