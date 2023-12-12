import { Card, CardBody, CardProps } from "@chakra-ui/react";

const TodayReportCard = ({ children }: CardProps) => {
  return (
    <>
      <Card
        bgColor={"#F5F5F9"}
        width={"max-content"}
        shadow={"none"}
        w={"100%"}
      >
        <CardBody
          color={"#2F2F2F"}
          padding={"14px 16px"}
          width={"max-content"}
          maxW={"346px"}
          fontSize={"18px"}
        >
          {children}
        </CardBody>
      </Card>
    </>
  );
};

export default TodayReportCard;
