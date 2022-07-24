describe("empty spec", () => {
   it("passes", () => {
      cy.visit("../../ex01.html");
      // Rb: Open Browser ../../ex00.html  browser=chorme
      cy.get("[v='user']").type("ภัคจิรา");
      //Rb: xpath=//input[@v='user']  ภัคจิรา
      // (//input[@v='user'] ย่อมาจาก /html/div/input[@v='user'])
      // []=เจาะจงattibute, @= attibte
      cy.get("[v='password']").type("280842@");
      //Rb: xpath=//input[@v='user']  280842@
   });
});
