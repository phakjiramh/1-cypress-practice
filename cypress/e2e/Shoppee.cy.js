describe("go to shopee", () => {
   it("go to shopee", () => {
      cy.visit("https://shopee.co.th");
      cy.get(".language-selection__list-item").contains("ไทย").click();
      cy.get(".shopee-popup__close-btn").click();
      // cy.get(".home-popup__close-button").click();
      // cy.get(".home-popup__close-area").click();
      // cy.get(
      //    '//*[@id="main"]/div/div[2]/div/div/shopee-banner-popup-stateful//div/div/div/div/div',
      // ).click();
   });
});
