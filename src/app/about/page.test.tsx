import About from "./page";
import { render, screen } from "@testing-library/react";

describe("About", () => {
  it("should render", () => {
    expect(1).toBe(1);
    render(<About />);
    expect(screen.getByText("This is my home app")).toBeInTheDocument();
  });
});
