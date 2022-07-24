describe("sing up facebook", () => {
   it("How to sign up", () => {
      cy.visit("https://facebook.com");
      cy.get("#email").type("pang280842@outlook.com");
      cy.get("#passContainer").type("pang280842@");
      cy.get("button").contains("เข้าสู่ระบบ").click();

      // cy.get(".aut-iframe").its("0.contentDocument.body").should("be.visible");
      //  .find("#email")
      //  .click();

      // cy.get('[data-testid="open-registration-form-button"]').click();

      // cy.iframe('#Your project: "Test Project"')
      //    .find("#email")
      //    .should("be.visible")
      //    .click();
   });
});
