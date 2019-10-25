import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { render, wait } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import pokemonTestData from "./testData/pokemonTestData";
import mockFetch from "./fetch-utils";

describe("Pokemon App", () => {
  beforeEach(() => {});
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("should render pokemon cards", async () => {
    window.fetch = jest.fn().mockResolvedValueOnce({
      json: jest.fn().mockResolvedValue(pokemonTestData)
    });

    // mockFetch.mockOnce(pokemonTestData);
    const { debug, getByText, getAllByTestId } = render(<App />);
    await wait(() => getByText("Bulbasaur"));
    expect(getByText("Bulbasaur")).toBeInTheDocument();
    expect(getAllByTestId("PokemonCard")).toHaveLength(3);
  });
});
