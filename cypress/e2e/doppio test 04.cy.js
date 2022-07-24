describe("Exercise doppio 04", () => {
   it("open website", () => {
      cy.visit("../../ex04.html");
      cy.get('div > span[c="Username"]')
         .next('input[type="text"]')
         .type("ภัคจิรา");
      // cy.get('div > span[c="Username"] + input[type="text"]').type("ภัคจิรา");
      // //  div มี span อยู่ข้างใน (อยู่ชั้นเดียวกับ = +) input
      // // Rb: //div[span[@c="Username"]]/input
      // cy.get('div > span[c="Password"] + input[type="text"]').type("280842@");
   });
});
