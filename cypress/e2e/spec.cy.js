describe("go to ", () => {
   it("go to youtube", () => {
      cy.visit("https://youtube.com");
      cy.get("#guide-icon").click();
      cy.get("#endpoint > tp-yt-paper-item > yt-formatted-string")
         .contains("สำรวจ")
         .click();
      cy.contains("วิดีโอที่มาแรง").should("be.visible");
   });
});
