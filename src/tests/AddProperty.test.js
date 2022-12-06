import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import AddProperty from "../components/AddProperty";

describe("AddProperty", () => {
  it("renders correctly", () => {
    const { asFragment } = render(
      <BrowserRouter>
        <AddProperty />
      </BrowserRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it("diplay the correct title", () => {
    render(<AddProperty />);
    const text = screen.getByText(/add property page/i);
    expect(text).toBeInTheDocument();
  });
});
