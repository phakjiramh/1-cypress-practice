describe("go to google", () => {
   it("go to google succeess", () => {
      cy.visit("https://google.com");
      cy.get('[title="ค้นหา"]').type("samsung{enter}");
   });

   it("search google with english aphabet", () => {
      cy.visit("https://google.com");
      cy.get('[title="ค้นหา"]').type("samsung{enter}");
   });

   it("search google with thai aphabet", () => {
      cy.visit("https://google.com");
      cy.get('[title="ค้นหา"]').type("ซัมซุง{enter}");
   });

   it("search google with special character", () => {
      cy.visit("https://google.com");
      cy.get('[title="ค้นหา"]').type("@@asdasd123123{{}}asd123{enter}");
   });
});
