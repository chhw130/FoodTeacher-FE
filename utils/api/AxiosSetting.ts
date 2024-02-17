import axios from "axios";
import { UserInfoType } from "../../component/template/SignupTemplate";
import { redirect } from "next/navigation";
import { UserPostDietData } from "@/app/maintest/page";
import { LoginUserType } from "../hooks/useUser";

export const instacne = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export interface DietResponse extends UserInfoType {
  breakfast: {
    menu: string;
    calories: number;
  };
  lunch: {
    menu: string;
    calories: number;
  };
  dinner: {
    menu: string;
    calories: number;
  };
  초과칼로리: number;
  운동필요시간: string;
  잔소리: string;
  advice: string;
  excess_calories: number;
  recommended_exercise: string;
}

export const getUserInform = async () => {
  const res = await instacne.get("");
};

export const getUserInfo = async () => {
  const userId = localStorage.getItem(`userId`);
  const res = await instacne.get(`/users/${userId}`);
  return res;
};

export const getUserBmr = async () => {
  const userId = localStorage.getItem(`userId`);
  const res = await instacne.get(`/users/${userId}/bmr`);
  return res;
};

/**v2 */
export const postKakaoCode = async (code: string) => {
  try {
    const res = await instacne.post(`/login`, { code });
    return res.data;
  } catch (err) {
    console.log(err);
    console.log(code);
    return redirect("/");
  }
};

export const registerUser = async (userInfo: UserInfoType) => {
  const accessToken = localStorage.getItem("accessToken");
  const res = await instacne.patch("/users/register", userInfo, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return res.data;
};

export const getUser = async () => {
  const accessToken = localStorage.getItem("accessToken");
  const res = await instacne.get(`/users/me`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  const data: LoginUserType = await res.data;
  return data;
};

export const getUserDiet = async () => {
  const accessToken = localStorage.getItem("accessToken");
  const res = await instacne.get("/users/me/mypage", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  const data: DietResponse = await res.data;
  return data;
};

export const postGuestDiet = async () => {
  const res = await instacne.post("/gpt/guest/diet-exercise-advice");
};

// export const postUserDiet = async (postDietData: UserPostDietData) => {
//   const accessToken = localStorage.getItem("accessToken");
//   const res = await instacne.post(`/gpt/diet-exercise-advice`, postDietData, {
//     headers: {
//       Authorization: `Bearer ${accessToken}`,
//     },
//   });
//   const data: DietResponse = await res.data;
//   return data;
// };

export const postUserDiet = async (postDietData: UserPostDietData) => {
  const accessToken = localStorage.getItem("accessToken");
  const url = accessToken
    ? `/gpt/diet-exercise-advice`
    : "/gpt/guest/diet-exercise-advice";

  const guestInfo = JSON.parse(localStorage.getItem("userInfo") as string);

  const guestDietData = {
    query: postDietData.query,
    height: guestInfo?.height,
    weight: guestInfo?.weight,
    age: guestInfo?.age,
    gender: guestInfo?.gender,
    target_weight: guestInfo?.target_weight,
  };

  const dietData = accessToken ? postDietData : guestDietData;

  const res = await instacne.post(url, dietData, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  const data: DietResponse = await res.data;
  return data;
};

export const postLogout = async () => {
  const accessToken = localStorage.getItem("accessToken");
  const res = await instacne.post(`/logout`, "", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return res.data;
};
