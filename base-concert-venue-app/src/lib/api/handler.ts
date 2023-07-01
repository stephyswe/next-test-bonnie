import { NextFetchEvent, NextRequest, NextResponse } from "next/server";
import { createEdgeRouter } from "next-connect";

import { validateToken } from "@/lib/auth/utils";

import { processApiError } from "./utils";

// base handler for centralized error and method handling
export const createHandler = ({
  authRequired,
}: { authRequired?: boolean } = {}) => {
  const handler = createEdgeRouter<NextRequest, NextFetchEvent>();
  handler.handler({
    onError(error, req, res) {
      const { status, message } = processApiError(error);
      NextResponse.json( { message },{ status });
    },
    onNoMatch(req, res) {
      NextResponse.json(`Method ${req.method} Not Allowed`);
    },
  });
  if (authRequired) {
    handler.use(async (req, res, next) => {
      const tokenIsValid = await validateToken(req, req.nextUrl.searchParams.get("userId"));
      if (!tokenIsValid) return NextResponse.json({status: 401});
      return next();
    });
  }
  return handler;
};
