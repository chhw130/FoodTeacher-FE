"use client";
import React, { useEffect, useState } from "react";
import { postUserDiet } from "../../utils/api/AxiosSetting";

const ActionProvider = ({ createChatBotMessage, setState, children }: any) => {
  // const { postUserDietMutation, userDietResponseData, isLoading } =
  //   usePostUserDiet();

  const [isLoading, setIsLoading] = useState(false);

  const caloryCalAction = () => {
    const message = createChatBotMessage(
      "칼로리 계산은 먹은 음식들의 칼로리를 계산해주는 기능이에요. 무엇을 얼마나 먹었는지 자세히 알려주실수록 정확한 정보를 드릴 수 있어요 :) \n 예시 : 밥 한공기, 닭가슴살 200g 을 먹었어.",
      {}
    );
    updateState(message, "calorie");
  };

  const caloryCalActionReply = async (reply: string) => {
    const params = { query: reply };

    // const resData = await postUserDiet(params);
    // const message: string = createChatBotMessage(resData?.잔소리, {
    //   widget: "overview",
    //   terminateLoading: true,
    //   withAvatar: true,
    // });
    const getDiet = async () => {
      setIsLoading(true);
      try {
        const resData = await postUserDiet(params);
        return resData?.잔소리;
      } catch {
        return "다시 시도해주세요!";
      }
    };

    const message = createChatBotMessage(getDiet(), {
      widget: "overview",
    });

    updateState(message, "end");
    // updateState(message, "end");
  };

  const calculateNutrient = () => {
    const message = createChatBotMessage("아침", {});
    updateState(message, "morning");
  };

  const afterMorningMessage = () => {
    const message = createChatBotMessage("점심", {});
    updateState(message, "lunch");
  };

  const afterLunchMessage = () => {
    const message = createChatBotMessage("저녁", {});
    updateState(message, "dinner");
  };

  const afterDinnerMessage = async () => {
    const message = createChatBotMessage("loading", {});

    updateState(message, "end");
  };

  const updateState = (message: any, checker = "") => {
    setState((prev: any) => ({
      ...prev,
      messages: [...prev.messages, message],
      checker,
    }));
  };
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            caloryCalAction,
            caloryCalActionReply,
            calculateNutrient,
            afterMorningMessage,
            afterLunchMessage,
            afterDinnerMessage,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
