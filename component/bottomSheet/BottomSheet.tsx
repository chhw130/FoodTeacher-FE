"use client";

import { Box, HStack, Heading, Text, VStack } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { BottomSheet, BottomSheetRef } from "react-spring-bottom-sheet";
import { DietMsgType } from "../card/ChattingRoom";
import { SubmitHandler, useForm } from "react-hook-form";
import { usePostUserDiet } from "../../utils/hooks/usePostUserDiet";
import { UserInfoType } from "../template/SignupTemplate";
import HealthIcon from "../icon/HealthIcon";
import ChattingInput from "../input/ChattingInput";
import Chatbot from "react-chatbot-kit";
import config from "../chatbot/config";
import MessageParser from "../chatbot/MessageParser";
import ActionProvider from "../chatbot/ActionProvider";
import "./BottomSheetStyle.css";
import "react-chatbot-kit/build/main.css";
import "./chatbot.css";

const TheBottomSheet = () => {
  const sheetRef = useRef<BottomSheetRef>(null);
  const [chattingData, setChattingData] = useState<string>("");

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<DietMsgType>();

  const {
    userDietResponseData: dietResponseData,
    postUserDietMutation,
    isLoading,
  } = usePostUserDiet();

  const onSubmit: SubmitHandler<DietMsgType> = async (data) => {
    const dietMsg = data.msg;
    reset();
    const userInfoString: string | null = localStorage.getItem("userInfo");
    setChattingData(dietMsg);
    if (userInfoString !== null) {
      const userInfo: UserInfoType = JSON.parse(userInfoString);
    }
    await postUserDietMutation({ query: dietMsg });
  };

  return (
    <>
      <BottomSheet
        open
        ref={sheetRef}
        blocking={false}
        snapPoints={({ maxHeight }) => [
          maxHeight * 0.8,
          maxHeight * 0.5,
          maxHeight * 0.1,
        ]}
        header={
          <VStack
            textAlign={"center"}
            w={"100%"}
            padding={"13px 22px 0px 22px"}
            spacing={"0.5px"}
          >
            <HStack spacing={"2px"}>
              <HealthIcon />
              <Heading
                as={"h1"}
                color={"#000000"}
                fontSize={"20px"}
                fontWeight={"medium"}
              >
                식선생
              </Heading>
            </HStack>

            <Text as={"h2"} color={"#787878"} fontSize={"12px"} lineHeight={2}>
              다이어트는 의지의 차이입니다.
            </Text>
          </VStack>
        }
        // footer={
        //   <ChattingInput
        //     handleSubmit={handleSubmit}
        //     onSubmit={onSubmit}
        //     register={register}
        //   />
        // }
      >
        <Chatbot
          // @ts-ignore
          config={config}
          messageParser={MessageParser}
          actionProvider={ActionProvider}
        />
      </BottomSheet>
    </>
  );
};

export default TheBottomSheet;
