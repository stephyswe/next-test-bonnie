import { validateToken } from "@/lib/auth/utils";
import { addReservation } from "@/lib/features/reservations/queries";
import { getShowById } from "@/lib/features/shows/queries";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const reservationId = req.nextUrl.searchParams.get("reservationId");
  const body = await req.json();
  const { seatCount, userId, showId } = body;
  const tokenIsValid = await validateToken(req);
  if (!tokenIsValid) {
    return NextResponse.json(
      { message: "user not authenticated" },
      { status: 401 }
    );
  }
  const reservation = await addReservation({
    id: Number(reservationId),
    showId: Number(showId),
    userId: Number(userId),
    seatCount: Number(seatCount),
  });
  // get show info to return with reservation
  const show = await getShowById(reservation.showId);

  return NextResponse.json(
    { reservation: { ...reservation, show } },
    { status: 201 }
  );
}
