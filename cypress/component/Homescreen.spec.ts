import { mount } from "cypress/svelte";
import Homescreen from "../../src/lib/Homescreen.svelte";
import '@percy/cypress';

describe("Homescreen Component", () => {
  it("renders the layout", () => {
    mount(Homescreen);
    cy.percySnapshot();
  });
});