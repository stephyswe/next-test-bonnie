import { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

import { User } from "../features/users/types";

export const validateToken = async (req: NextRequest, paramsUserId: any) => {
  const token = await getToken({ req });
  if (!token) return false;

  const { requestId } = await req.json(); // To read request data
  const queryParamsId = paramsUserId; // To read query params
  const userId = requestId ?? queryParamsId;

  if (!userId) return false;

  const tokenUser = token.user as User;
  return token && tokenUser.id === Number(userId);
};
