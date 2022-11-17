import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe, test, expect, vi } from "vitest";
import userEvent from "@testing-library/user-event";

import SearchBar from "../components/SearchBar";

describe("Componente SearchBar", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });
  test("Deve renderizar o componente searchBar e digitar o nome de uma cidade no input", () => {
    // cria um mock das funções
    const onSubmit = vi.fn();
    const onChange = vi.fn();

    render(
      <SearchBar
        onSubmit={onSubmit}
        onChange={onChange}
        searchCity="são paulo"
      />
    );
    const input: HTMLInputElement = screen.getByLabelText("searchBar");
    userEvent.keyboard("são paulo");
    expect(input.value).toBe("são paulo");
  });
});
