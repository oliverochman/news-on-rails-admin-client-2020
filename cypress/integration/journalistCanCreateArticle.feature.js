describe("Journalist can create article", () => {
  beforeEach(() => {
    cy.server();
    cy.visit("/")
    cy.route({
      method: "POST",
      url: "http://localhost:3000/api/v1/articles",
      response: '{"message": "Your article was successfully created"}',
    });
  });
  it("journalist can create an article successfully", () => {
    cy.get("button").contains("Create Article").click();
    cy.get("#article-form").within(() => {
      cy.get("#title").type("Title");
      cy.get("#lead").type("Lead");
      cy.get("#content").type("This is content");
      cy.file_upload("img.jpeg", "#image-upload", "image/jpeg");
      cy.get('[name="category"]').click()
      cy.get("button").contains("Save Article").click();
    });
  });
});
