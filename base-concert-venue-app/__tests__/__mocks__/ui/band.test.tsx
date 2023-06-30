import { render, screen } from "@testing-library/react";

import { readFakeData } from "../fakeData";
import BandIdPageContent from "@/app/bands/[bandId]/content";

describe("Band", () => {
  it("displays correct band information", async () => {
    const { fakeBands } = await readFakeData();
    render(<BandIdPageContent error={null} band={fakeBands[0]} />);

    const heading = screen.getByRole("heading", {
      name: /the wandering bunnies/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
