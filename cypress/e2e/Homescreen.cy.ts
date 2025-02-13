import Homescreen from "../../src/lib/Homescreen.svelte";

describe('template spec', () => {
  it('passes', () => {
    cy.visit('/')
	cy.percySnapshot(Homescreen);
  })
})