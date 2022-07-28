describe("ดูดวง", () => {
   it("Go to web site", () => {
      cy.visit("https://googel.com");
      cy.get('[title="ค้นหา"]').type("ดูดวงกราฟชีวิต{enter}");
      cy.get("h3").contains("ดูดวง กราฟชีวิต").click();
      cy.get("[name='txt_name']").type("ภัคจิรา");
      cy.get("#dd_day").select("28", { force: true });
      // {force: true} คือการบังคับเลือก inputที่เราต้องการ เพราะมันถูกซ่อนอยู่ใต้element อื่นๆ ในกรณีนี้ มี span มาบังเพราะspanมันมาตกแต่งUIให้สวยงาม
      cy.get("#dd_month").select("8", { force: true });
      cy.get("#dd_year").select("2542", { force: true });
      cy.get("#dd_hh").select("8", { force: true });
      cy.get("#dd_mm").select("9", { force: true });
      cy.get("#btn_submit").click();
   });
});
