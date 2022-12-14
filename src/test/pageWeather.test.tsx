import React from "react";
import { getByText, render, screen } from "@testing-library/react";
import { describe, test, vi } from "vitest";
import PageWeather from "../views/PageWeather";
import userEvent from "@testing-library/user-event";

describe("Componente pageWeather", async () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });
  test("Deve renderizar a página", () => {
    const { debug } = render(<PageWeather />);

    expect(screen.getByText("Previsão do tempo")).toBeInTheDocument();
  });

  test("Fazer requisão para  api ao clicar da enter", async () => {
    const onSubmit = vi.fn();
    const onChange = vi.fn();
    const { debug } = render(<PageWeather />);

    // digigta alguma cidade na caixa de pesquisa
    const input = screen.getByLabelText("searchBar");
    userEvent.type(input, "salvador");
    // pega o button de pesquisar
    const button = screen.getByRole("button");
    // clica no button de pesquisar
    userEvent.click(button);
    // depois de clicar em pesquisar ele limpa a caixa de pesquisa
    // e tem que fazer a requisição pra api que busca o nome da cidade e a key e para outra api que busca a previsão do tempo

    // moca a resposta do request
    vi.mock("fetch");
    const mockUrl = "/api/myapi";
    vi.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({ location: { localizedName: "salvador" } }),
      })
    );

    const result = await onSubmit();
    debug();
    // expect(screen.getByLabelText("searchBar")).toBe("salvador");
    expect(mockUrl).toHaveBeenCalled();
  });
});
