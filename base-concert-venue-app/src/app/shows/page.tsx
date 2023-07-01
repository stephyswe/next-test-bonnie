import { getShows as getShowsViaDbQuery } from "@/lib/features/shows/queries";
import ShowsContentPage from "./content";

// ISR reference
// https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration

// SWR + ISR reference:
// https://www.smashingmagazine.com/2021/09/useswr-react-hook-library-incremental-static-regeneration-nextjs/

export default async function Shows() {
  const isrShows = await getShowsViaDbQuery();
  return <ShowsContentPage isrShows={isrShows} />;
}
