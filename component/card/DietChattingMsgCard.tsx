"use client";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  CardProps,
  Divider,
  Flex,
  HStack,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import WarningIcon from "../icon/WarningIcon";
import { useRouter } from "next/navigation";
import MenuWidget from "../chatbot/widget/MenuWidget";
import { cloneDeep } from "lodash";
import { useState } from "react";

const DietChattingMsgCart = (props: any) => {
  const router = useRouter();
  const messageLength = props.state.messages.length;
  const { checker } = props.state.messages[messageLength - 1];
  const { payload } = props.state.messages[messageLength - 1];

  const dietChecker = cloneDeep(checker.current);
  console.log("console : ", payload);

  const [dietResponseData, setDietResponseData] = useState(dietChecker);

  return (
    <>
      {!dietResponseData ? (
        <MenuWidget {...props} />
      ) : (
        <Card
          w={"312px"}
          bgColor={"#FFFFFF"}
          shadow={"none"}
          margin={"0px 0px 0px 22px"}
        >
          <CardHeader padding={"14px 16px 0 16px"}>
            <Flex justifyContent={"space-between"} textAlign={"center"}>
              <Box>
                <Text as={"h2"} color={"#00C27C"} fontSize={"15px"}>
                  아침
                </Text>
                <Heading
                  as={"h1"}
                  color={"#000000"}
                  fontSize={"18px"}
                  fontWeight={"regular"}
                >
                  {` ${dietResponseData?.breakfast.calories} Kcal`}
                </Heading>
              </Box>
              <Box>
                <Text as={"h2"} color={"#00C27C"} fontSize={"15px"}>
                  점심
                </Text>
                <Heading
                  as={"h1"}
                  color={"#000000"}
                  fontSize={"18px"}
                  fontWeight={"regular"}
                >
                  {` ${dietResponseData?.lunch.calories} Kcal`}
                </Heading>
              </Box>
              <Box>
                <Text as={"h2"} color={"#00C27C"} fontSize={"15px"}>
                  저녁
                </Text>
                <Heading
                  as={"h1"}
                  color={"#000000"}
                  fontSize={"18px"}
                  fontWeight={"regular"}
                >
                  {`${dietResponseData?.dinner.calories} Kcal`}
                </Heading>
              </Box>
            </Flex>
            <Divider margin={"0 auto"} padding={"4.5px 0"} color={"#ECECEC"} />

            <HStack justifyContent={"center"}>
              <WarningIcon />
              <Text
                textAlign={"center"}
                paddingTop={"4.5px"}
                color={"#FF6C6C"}
                fontWeight={"semibold"}
                fontSize={"17px"}
              >
                {dietResponseData?.초과칼로리 > 0
                  ? `${dietResponseData?.초과칼로리} Kcal를 초과하셨습니다.`
                  : `${-dietResponseData?.초과칼로리} Kcal 더 드셔도 됩니다.`}
              </Text>
            </HStack>
          </CardHeader>
          <CardBody color={"#2F2F2F"} padding={"14px 14px 14px 14px"}>
            <Button
              onClick={() => router.push("/detail")}
              bgColor={"#E7E7E7"}
              w={"100%"}
              h={"41px"}
            >
              <Text color={"#525252"}>식단 상세보기</Text>
            </Button>
          </CardBody>
        </Card>
      )}
    </>
  );
};

export default DietChattingMsgCart;
