describe("Exercise.Doppio spec", () => {
   it("open website", () => {
      cy.visit("../../ex00.html");
      // Rb: Open Browser ../../ex00.html  browser=chorme
      cy.get("#username-box").type("ภัคจิรา");
      // Rb: Input text id=username-box  ภัคจิรา
      cy.get("#password-box").type("280842@");
      // Rb: Input text id=password-box  280842@
   });
});
