describe("empty spec", () => {
   it("passes", () => {
      cy.visit("../../ex05.html");
      cy.get("span")
         .contains("User:")
         .next('input[type="text"]')
         .type("ภัคจิรา");
      cy.get("span")
         .contains("Pass:")
         .next('input[type="text"]')
         .type("280842@");
      // กรณีที่มี text อยู่ระหว่าง tag (ในที่นี้ tag คือ span --->  <span>User:</span>) มันไม่ใช่ attribute v หรือ c
      // อันนีี้จำเป็นต้องใช้ .next('selector') เพราะ contain ใช้+ ไม่ได้
      // rb: xpath=//div[span[text()='User:']]/input  ภัคจิรา
   });
});
