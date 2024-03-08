"use client";
import React from "react";
import { IMessage } from "react-chatbot-kit/build/src/interfaces/IMessages";

const MessageParser = ({ children, actions }: any) => {
  const messageLength = children.props.state.messages.length;
  const { checker } = children.props.state.messages[messageLength - 1];

  const saveMessages = (message: IMessage) => {
    localStorage.setItem("chat_messages", JSON.stringify(message));
  };

  saveMessages(children.props.state);

  const parse = async (message: string) => {
    if (checker === "calorie") {
      return actions.caloryCalActionReply(message);
    }
    if (checker === "morning") {
      return actions.afterMorningMessage();
    }

    if (checker === "lunch") {
      return actions.afterLunchMessage();
    }

    if (checker === "dinner") {
      return actions.afterDinnerMessage();
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;
