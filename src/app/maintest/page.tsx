"use client";
import { Box, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import ChattingRoom, {
  DietMsgType,
} from "../../../component/card/ChattingRoom";
import DietStateCard from "../../../component/card/DietStateCard";
import { useRouter } from "next/navigation";
import HealthMountainIcon from "../../../component/icon/HealthMountainIcon";
import DietStateSection from "../../../component/section/DietStateSection";
import { usePostUserDiet } from "../../../utils/hooks/usePostUserDiet";
import { SubmitHandler, useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { UserInfoType } from "../../../component/template/SignupTemplate";
import { useUser } from "../../../utils/hooks/useUser";
import useGetUserDietInfo from "../../../utils/hooks/useGetUserDietInfo";

export interface UserPostDietData {
  query: string;
  userId?: string | null;
}

const Page = () => {
  const [chattingData, setChattingData] = useState<string>("");
  const [userDiet, setUserDiet] = useState<boolean>(false);
  const { isLoggedIn } = useUser();
  const { userDietInfo } = useGetUserDietInfo();

  const router = useRouter();

  useEffect(() => {
    let userDietData: any = localStorage.getItem("userInfo");
    if (!isLoggedIn && !userDietData) {
      router.push("/");
    }
  }, [isLoggedIn, router]);

  const {
    userDietResponseData: dietResponseData,
    postUserDietMutation,
    isLoading,
  } = usePostUserDiet();

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<DietMsgType>();

  useEffect(() => {
    let userDietData: any = localStorage.getItem("userDiet");
    setUserDiet(userDietData);
  }, [isLoading]);

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
      <Flex
        flexDir={"column"}
        w={"100%"}
        h={"100%"}
        pos={"relative"}
        margin={"0 auto"}
        maxW={"420px"}
        padding={"60px 0px 0px 0px"}
        bgColor={"#2B2C2C"}
        alignItems={"center"}
      >
        <VStack spacing={"20px"} w={"100%"} h={"100%"}>
          {!userDiet && !userDietInfo?.recommended_exercise ? (
            <DietStateCard>
              <HStack
                display={"flex"}
                margin={"0 auto"}
                w={"100%"}
                alignItems={"flex-end"}
              >
                <Box w={"100%"}>
                  <Text fontSize={"16px"} color={"#787878"}>
                    잠깐 스톱, 회원님 뭐드셨어요?
                  </Text>
                  <Text fontSize={"22px"}>
                    식단을 입력하시면
                    <br />
                    오늘의 솔루션을 드릴게요
                  </Text>
                </Box>
                <HealthMountainIcon />
              </HStack>
            </DietStateCard>
          ) : (
            <DietStateCard>
              <DietStateSection isLoading={isLoading} />
            </DietStateCard>
          )}

          <ChattingRoom
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
            register={register}
            chattingData={chattingData}
            isLoading={isLoading}
            dietResponseData={dietResponseData}
          />
        </VStack>
      </Flex>
    </>
  );
};

export default Page;
