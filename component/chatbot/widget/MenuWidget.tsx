"use client";

import React from "react";
import { Button, Card, CardBody, VStack } from "@chakra-ui/react";

const MenuWidget = (props: any) => {
  const selectCaloryCalculate = () => {
    props.actions.caloryCalAction();
  };

  const selectTodayCal = () => {
    props.actions.calculateNutrient();
  };

  return (
    <Card>
      <CardBody>
        <VStack>
          <Button onClick={selectCaloryCalculate} w={"100%"}>
            칼로리 계산
          </Button>
          <Button w={"100%"} onClick={selectTodayCal}>
            오늘의 영양 정보
          </Button>
        </VStack>
      </CardBody>
    </Card>
  );
};

export default MenuWidget;
