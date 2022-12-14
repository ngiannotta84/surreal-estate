import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import App from "../components/App";

describe("App", () => {
  it("renders correctly", () => {
    const { asFragment } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders Surreal Estate", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const linkElement = screen.getByText(/surreal estate/i);
    expect(linkElement).toBeInTheDocument();
  });
});
