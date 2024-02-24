"use client";
import { HStack, Heading, Text, VStack } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { BottomSheet, BottomSheetRef } from "react-spring-bottom-sheet";
import HealthIcon from "../icon/HealthIcon";
import Chatbot from "react-chatbot-kit";
import config from "../chatbot/config";
import MessageParser from "../chatbot/MessageParser";
import ActionProvider from "../chatbot/ActionProvider";
import "./BottomSheetStyle.css";
import "react-chatbot-kit/build/main.css";
import "./chatbot.css";

const TheBottomSheet = () => {
  const sheetRef = useRef<BottomSheetRef>(null);

  const getMessageHistory = () => {
    const messageHistory = JSON.parse(
      localStorage.getItem("chat_messages") as string
    );

    // console.log("message", messageHistory?.messages);

    return messageHistory?.messages || null;
  };

  const [message, setMessage] = useState(() => getMessageHistory());

  return (
    <>
      <BottomSheet
        open
        ref={sheetRef}
        blocking={false}
        snapPoints={({ maxHeight }) => [
          maxHeight * 0.9,
          maxHeight * 0.5,
          maxHeight * 0.13,
        ]}
        header={
          <VStack
            textAlign={"center"}
            w={"100%"}
            padding={"13px 22px 20px 22px"}
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
      >
        <Chatbot
          // @ts-ignore
          config={config}
          // @ts-ignore
          messageHistory={message}
          messageParser={MessageParser}
          actionProvider={ActionProvider}
          placeholderText="답변을 입력해주세요."
          validator={(input) => {
            return input !== "";
          }}
        />
      </BottomSheet>
    </>
  );
};

export default TheBottomSheet;
