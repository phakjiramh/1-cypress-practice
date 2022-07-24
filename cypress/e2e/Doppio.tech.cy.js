describe("Exercise.Doppio", () => {
   it("open website", () => {
      cy.visit("../../ep01_small_excercise.html");
      cy.get("#username-box").type("ภัคจิรา");
      cy.get("[v='password'] > input").type("280842@");
      //  กรณีที่ไม่ระบุ ID หรือ class อย่างชัดมีแค่ div v ต้องหา attribute (v)
      // ในที่นี้คือ v="password" และจะกรอกข้อมูลลงใน input(attibute 'v' อยู่ใน div ไม่ใช่ input)
      cy.get("[doppio='nickname']").type("Pang");
      // attibute นี้คือ doppio ซึ่งอยู่ใน input อยู่แล้วจึงไม่ต้องหา input แล้ว
      cy.get("select").select("doppio");
      cy.get("#op1").check();
      cy.get("#use-me").click();
   });
});
