import React from "react";
import ReactDOM from "react-dom";
import { describe, expect, it } from "@jest/globals";
import { act } from "react-dom/test-utils";
import {MemoryRouter} from "react-router";
import GetRegistrerForflytning from "../src/client/RegistrerForflytning";

async function render(component) {
  const container = document.createElement("div");
  document.body.appendChild(container);
  await act(async () => {
    ReactDOM.render(<MemoryRouter>{component}</MemoryRouter>, container);
  });
  return container;
}

const forflytningApi = {
    async getAllRegistrations() {
        return (
            [
                {
                    "produksjonsplassid": 1000000,
                    "kommunenummer": "0001",
                    "gaardsnummer": 1,
                    "bruksnummer": 1,
                    "bygningsnummer": -1,
                    "koordinater": null,
                    "koordinatsystem": null,
                    "opprettetdato": "2022-10-17",
                    "lastchanged": "2022-10-17"
                },
                {
                    "produksjonsplassid": 1000001,
                    "kommunenummer": "0001",
                    "gaardsnummer": 3,
                    "bruksnummer": 1,
                    "bygningsnummer": -1,
                    "koordinater": "{\"type\": \"Point\", \"crs\": {\"type\": \"name\", \"properties\": {\"name\": \"EPSG:4326\"}}, \"coordinates\": [11.348141, 60.845944]}",
                    "koordinatsystem": "EPSG:4326",
                    "opprettetdato": "2022-10-17",
                    "lastchanged": "2022-10-17"
                },
                {
                    "produksjonsplassid": 1000002,
                    "kommunenummer": "0001",
                    "gaardsnummer": 2,
                    "bruksnummer": 1,
                    "bygningsnummer": -1,
                    "koordinater": "{\"type\": \"Point\", \"crs\": {\"type\": \"name\", \"properties\": {\"name\": \"EPSG:4326\"}}, \"coordinates\": : [11.631629, 60.31758]}",
                    "koordinatsystem": "EPSG:4326",
                    "opprettetdato": "2022-10-17",
                    "lastchanged": "2022-10-17"
                }
            ]
        );
    }
};

describe("get all registered forflytninger", () => {
  it("show registered forflytninger on dom", async () => {

    const container = await render(<GetRegistrerForflytning forflytningApi={ forflytningApi } />);
    expect(container.innerHTML).toMatchSnapshot();
    expect(document.querySelector('option[value^="1000000"]').value).toEqual("1000000");
  });
})