import { mount } from "cypress/svelte";
import Homescreen from "../../src/lib/Homescreen.svelte";

describe("Homescreen Component", () => {
  it("renders the layout", () => {
    mount(Homescreen);
    cy.get(".layout").should("exist");
  });
});