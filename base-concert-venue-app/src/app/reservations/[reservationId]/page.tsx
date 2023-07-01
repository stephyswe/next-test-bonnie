"use client";

import { useRouter } from "next/navigation";
import { Reservation } from "@/components/reservations/Reservation";

interface IParams {
  reservationId?: string;
}

export default function ReservationPageId({ params }: { params: IParams }) {
  const router = useRouter();
  const { reservationId: showId } = params;

  const submitPurchase = ({
    reservationId,
    reservedSeatCount,
  }: {
    reservationId: number;
    reservedSeatCount: number;
  }) => {
    router.push(
      `/confirmation/${reservationId}?seatCount=${reservedSeatCount}&showId=${showId}`
    );
  };

  if (!showId) return null;
  return (
    <Reservation showId={Number(showId)} submitPurchase={submitPurchase} />
  );
}

ReservationPageId.auth = true;
