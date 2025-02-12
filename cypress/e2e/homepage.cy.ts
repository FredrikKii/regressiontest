describe("Homepage", () => {
	it("should load correctly", () => {
	  cy.visit("/");
	  cy.argosScreenshot("homepage"); // Tar en screenshot för Argos
	});
  });
  