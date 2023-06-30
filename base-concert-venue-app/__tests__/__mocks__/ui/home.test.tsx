import { render, screen } from "@testing-library/react";

import Home from "@/app/page";

describe("Home", () => {
  it("renders a heading", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", {
      name: /welcome to popular concert venue/i,
    });

    expect(heading).toBeInTheDocument();
  });
  it("renders a image", () => {
    render(<Home />);

    const image = screen.getByRole("img", {
      name: /concert goer with hands in the shape of a heart/i,
    });

    expect(image).toBeInTheDocument();
  });
});
