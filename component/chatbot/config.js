"use client";
import { createChatBotMessage, createCustomMessage } from "react-chatbot-kit";
import MenuWidget from "./widget/MenuWidget";
import DietChattingMsgCart from "../card/DietChattingMsgCard";
import CustomMessage from "./CustomMessage";

const config = {
  initialMessages: [
    createChatBotMessage(`안녕하세요 메뉴를 선택해주세요!`, {
      widget: "overview",
      delay: 0,
    }),
  ],
  customComponents: {
    headers: () => false,
  },
  widgets: [
    {
      widgetName: "overview",
      widgetFunc: (props) => <MenuWidget {...props} />,
    },
    {
      widgetName: "dietResponse",
      widgetFunc: (props) => <DietChattingMsgCart {...props} />,
    },
  ],

  customStyles: {},

  customMessages: {
    custom: (props) => <CustomMessage {...props} />,
  },
};

export default config;
