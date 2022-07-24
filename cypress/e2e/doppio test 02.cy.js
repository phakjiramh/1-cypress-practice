describe("Exercise doppio", () => {
   it("open website", () => {
      cy.visit("../../ex02.html");
      cy.get("[v='username']>input").type("ภัคจิรา");
      // กรณีที่ attibute(V) อยู่บน div เลย
      // Rb: Input text xpath//div[@v='username']/input  ภัคจิรา
      cy.get("[v='password']>input").type("280842@");
      // Rb: Input text xpath//div[@v='password']/input  280842@
   });
});
