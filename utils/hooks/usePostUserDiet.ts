import { useMutation } from "@tanstack/react-query";
import { postUserDiet } from "../api/AxiosSetting";
import { UserPostDietData } from "@/app/maintest/page";
import { useToast } from "@chakra-ui/react";
import { useUser } from "./useUser";

export const usePostUserDiet = () => {
  const toast = useToast();
  const { userData } = useUser();
  const {
    data: userDietResponseData,
    mutateAsync: postUserDietMutation,
    isLoading,
  } = useMutation({
    mutationFn: (data: UserPostDietData) => postUserDiet(data),
    onError: () => {
      const toastId = "chattingErr";
      if (!toast.isActive(toastId)) {
        toast({
          id: "chattingErr",
          title: "Sever Error",
          description: "다시 한번 입력해주세요.",
          status: "error",
          duration: 5000,
          position: "top",
          isClosable: true,
        });
      }
    },
  });

  if (userDietResponseData && !userData) {
    localStorage.setItem("userDiet", JSON.stringify(userDietResponseData));
  }

  return { userDietResponseData, postUserDietMutation, isLoading };
};
