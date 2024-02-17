"use client";
import { Flex, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import ChattingInputArrowIcon from "../icon/ChattingInputArrowIcon";
import { DietMsgType } from "../card/ChattingRoom";
import {
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

interface ChattingInputPropsType {
  handleSubmit: UseFormHandleSubmit<DietMsgType>;
  onSubmit: SubmitHandler<DietMsgType>;
  register: UseFormRegister<DietMsgType>;
}

const ChattingInput = ({
  handleSubmit,
  onSubmit,
  register,
}: ChattingInputPropsType) => {
  return (
    <>
      <Flex
        as={"form"}
        onSubmit={handleSubmit(onSubmit)}
        w={"100%"}
        h={"80%"}
        maxW={"420px"}
        padding={"10px 22px"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <InputGroup w={"100%"} bgColor={"#FFFFFF"} borderRadius={"12px"}>
          <Input
            {...register("msg", { required: true })}
            maxLength={40}
            borderRadius={"12px"}
            border={"1px solid #D4D4D4"}
            placeholder="답변을 입력해주세요"
            fontSize={"16px"}
            h={"50px"}
            focusBorderColor={"#00C27C"}
            color={"#00C27C"}
          />
          <InputRightElement
            as={"button"}
            type="submit"
            cursor={"pointer"}
            marginRight={"5px"}
            h={"50px"}
          >
            <ChattingInputArrowIcon />
          </InputRightElement>
        </InputGroup>
      </Flex>
    </>
  );
};

export default ChattingInput;
