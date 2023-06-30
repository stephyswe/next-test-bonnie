import { getBandById } from "@/lib/features/bands/queries";
import BandIdPageContent from "./content";

async function getBand(params: any) {
  const { bandId } = params;
  let band = null;
  let error = null;
  try {
    // for SSG, talk directly to db (no need to go through API)
    band = await getBandById(Number(bandId));
  } catch (e) {
    if (e instanceof Error) error = e.message;
    if (e && typeof e === "object" && "toString" in e) error = e.toString();
  }
  return { band, error };
}

export async function generateStaticParams() {
  return [{ id: '1' }, { id: '2' }]
}

export default async function BandIdPage({ params }: { params: any }) {
  const { error, band } = await getBand(params);
  return <BandIdPageContent error={error} band={band} />;
}
