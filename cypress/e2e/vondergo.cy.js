describe("vonder", () => {
   it("Go to vonder go", () => {
      cy.viewport("macbook-15");

      cy.visit("https://www.vonder.co.th");
      cy.get("button").contains("ลงทะเบียนใช้งานฟรี").click();
   });
});
