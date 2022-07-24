describe("exercise doppio", () => {
   it("open website", () => {
      cy.visit("../../ex06.html");
      cy.get("div")
         .contains("User:")
         .find('input[type="text"]')
         //  ใช้ find เนื่องจาก User: อยู่ใน div ซึ่งมี tag input แยกลงไป
         // ไม่เหมือน 05 ที่่ต้องใช้ next เพราะมี tag span อยู่ชั้นเดียวกับ input
         .type("ภัคจิรา");
      cy.get("div")
         .contains("Password:")
         .find('input[type="text"]')
         .type("280842@");
      cy.get("div")
         .contains("Nickname:")
         .find('input[type="text"]')
         .type("Pang");
   });
});
