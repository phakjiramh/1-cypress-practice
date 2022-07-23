describe("search youtube", () => {
   it("go to youtube", () => {
      cy.visit("https://youtube.com");
      cy.get("input[id=search]").type("snsd");
      cy.get("#search-icon-legacy").click();
   });
});
