import { render, screen } from "@testing-library/react";

import BandId from "@/pages/bands/[bandId]";
import { readFakeData } from "../fakeData";

describe("Band", () => {
  it("displays correct band information", async () => {
    const { fakeBands } = await readFakeData();
    render(<BandId error={null} band={fakeBands[0]} />);

    const heading = screen.getByRole("heading", {
      name: /the wandering bunnies/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
