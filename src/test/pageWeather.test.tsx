import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, test, vi } from "vitest";
import PageWeather from "../views/PageWeather";
import userEvent from "@testing-library/user-event";

describe("Componente pageWeather", async () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });
  test("Deve renderizar a página", () => {
    const onSubmit = vi.fn();
    const onChange = vi.fn();
    const { debug } = render(<PageWeather />);
    const button = screen.getByRole("button");
    userEvent.click(button);
    debug();
    expect("Informe a cidade").toBeInTheDocument();
  });
});
