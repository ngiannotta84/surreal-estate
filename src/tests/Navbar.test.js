import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import Navbar from "../components/Navbar";

describe("Navbar", () => {
  it("renders correctly", () => {
    const { asFragment } = render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it("renders view property", () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    const text = screen.getByText(/view property/i);
    expect(text).toBeInTheDocument();
  });
  it("renders the logo image", () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    const logo = screen.getByTestId("logo");
    expect(logo).toHaveClass("logo");
  });
});
