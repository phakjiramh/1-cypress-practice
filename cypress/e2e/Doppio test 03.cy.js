describe("exercise 03", () => {
   it("open website", () => {
      cy.visit("../../ex03.html");
      cy.get("div")
         // ใน div มี attribute v="username-gSDFsdcsd" จะเห็นว่ามันมีตัวที่มั่วๆข้างหลัง มันอาจจะเกิดการปป ได้ตลอดเวลา
         // เราเลยจะไม่เสี่ยงเอามันลงไป เผื่อtestรอบหลังแล้วพัง เราต้อง containsตัวที่มันค่อนข้าง specific
         .contains("Username")
         //  เรา contains ตัวที่อยู่ตรง divมา
         .find('input[type="text"]')
         //  find ตัวที่เล็กลงจาก div เพิ่อให้มันหาเจอ
         .type("ภัคจิรา");

      // หรือใช้วิธี cy.get("body > div:nth-child(2) > input[type=text]").type("ภัคจิรา");
      // cypress: copy selector ไปใน console ดู แล้วลอง copyมาให้หมดว่าใช้ได้ไหม โดยไม่ต้องใส่ containsแล้ว
      // Rb: xpath//div[contains(@v,'username')]/input  ภัคจิรา
      cy.get("div")
         .contains("Password")
         .find('input[type="text"]')
         .type("280842@");
      //  หลักการเดียวกัน
   });
});
