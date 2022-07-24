describe("Exercise.Doppio", () => {
   it("open website", () => {
      cy.visit("../../ep01_small_excercise.html");
      // การใช้ browserที่ไม่ได้อยู่บนwebsite(../../name web)
      cy.get("#username-box").type("ภัคจิรา");
      cy.get("[v='password'] > input").type("280842@");
      // cy.get("div").contains("Password").find("input[type='text']").type("280842@"); ใช้ท่านี้ก็ได้
      // ดูเทียบกับ exercise 03 ที่ 03 ใช้[attribute]ไปเลย ไม่ได้ เพราะ 03 ไม่ค่อย specific อันนีใช้ได้เพราะมันเจาะลง ไม่มีตัวมั่วๆ
      //  กรณีที่ไม่ระบุ ID หรือ class อย่างชัดเจนมีแค่ div v ต้องหา attribute (v)
      // ในที่นี้คือ v="password" และจะกรอกข้อมูลลงใน input(attibute 'v' อยู่ใน div ไม่ใช่ input)
      cy.get("[doppio='nickname']").type("Pang");
      // attibute นี้คือ doppio ซึ่งอยู่ใน input อยู่แล้วจึงไม่ต้องหา input แล้ว
      cy.get("select").select("doppio");
      cy.get("#op1").check();
      cy.get("#use-me").click();
      //pass
   });
});
