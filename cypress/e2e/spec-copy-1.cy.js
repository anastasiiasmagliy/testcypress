describe("My first Cypress tests", () => {
    it("Should open a website", () => {
        cy.visit("https://example.com");

        cy.contains("Example Domain").should("be.visible");
    });
});