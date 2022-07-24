describe("Process for sign up email", () => {
   it("Go to website", () => {
      cy.origin("google.com", () => {
         cy.visit("/intl/th/gmail/about/");
         cy.get(".mobile-tablet-only").contains("ใช้งาน Gmail").click();
         cy.wait(5000);
         cy.get("#firstName").should("be.visible");
         // cy.get("#firstName").type("testsetsr");
         // const sentArgs = { username: "username", password: "P@55w0rd!" };
      });
   });
});
