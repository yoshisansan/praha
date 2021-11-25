import App from "../src/App";
import "@testing-library/jest-dom";
import { render, fireEvent } from "@testing-library/react";
import React from "react";

describe("App components", () => {
  test("render App components", () => {
    const { getByText } = render(<App />);
    //screen.debug();
    expect(getByText(/Please sign in/)).toBeInTheDocument();
    expect(getByText(/Sign in/)).toBeInTheDocument();
    fireEvent.click(getByText(/Sign in/));

    //screen.debug();
    expect(getByText(/Welcome/)).toBeInTheDocument();
    expect(getByText(/Sign out/)).toBeInTheDocument();
    fireEvent.click(getByText(/Sign out/));

    //screen.debug();
    expect(getByText(/Please sign in/)).toBeInTheDocument();
  });
});