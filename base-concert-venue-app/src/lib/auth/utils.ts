import { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

import { User } from "../features/users/types";

export const validateToken = async (req: NextRequest) => {
  const token = await getToken({ req });
  if (!token) return false;

  const { userId: bodyUserId } = await req.json();
  const paramsUserId = req.nextUrl.searchParams.get("userId");
  const userId = bodyUserId ?? paramsUserId;
  if (!userId) return false;

  const tokenUser = token.user as User;
  return token && tokenUser.id === Number(userId);
};
