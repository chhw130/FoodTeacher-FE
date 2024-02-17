"use client";
import React from "react";
import Chatbot from "react-chatbot-kit";
import MessageParser from "../../../component/chatbot/MessageParser";
import ActionProvider from "../../../component/chatbot/ActionProvider";
import "react-chatbot-kit/build/main.css";
import "../chatbot/chatbot.css";
import config from "../../../component/chatbot/config";

const page = () => {
  return (
    <>
      <Chatbot
        // @ts-ignore
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </>
  );
};

export default page;
