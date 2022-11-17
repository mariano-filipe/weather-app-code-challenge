import React from "react";
import { render, screen } from "@testing-library/react";
import { App } from "./App";

describe("App", () => {
  test("render to app", () => {
    render(<App />);

    expect(screen.getByText("Previsão do tempo")).toBeInTheDocument();
  });
});
