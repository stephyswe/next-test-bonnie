import { getBands } from "@/lib/features/bands/queries";
import BandPageContent from "./content";

const removeLeadingThe = (bandName: string) => bandName.replace(/^the /i, "");

// ISR reference
// https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration

export default async function Bands() {
  const isrBands = await getBands();
  isrBands.sort((a, b) =>
    removeLeadingThe(a.name) > removeLeadingThe(b.name) ? 0 : -1
  );
  return <BandPageContent data={isrBands} />;
}
