"use client";
import React, { useEffect } from "react";
import { usePostUserDiet } from "../../utils/hooks/usePostUserDiet";

const MessageParser = ({ children, actions }: any) => {
  const { postUserDietMutation, userDietResponseData, isLoading } =
    usePostUserDiet();

  useEffect(() => {}, [userDietResponseData]);

  const { checker } = children.props.state;

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
