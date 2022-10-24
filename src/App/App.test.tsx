import React from "react";
import { render, screen } from "@testing-library/react";
import { App } from "./App";

describe("App", () => {
  test("render the TODO text", () => {
    render(<App />);

    expect(screen.getByRole("heading")).toHaveTextContent("TODO App");
  });
});
