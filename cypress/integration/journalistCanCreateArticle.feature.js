describe("Journalist can create article", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "POST",
      url: "http://localhost:3000/api/v1/articles",
      response: '{"message": "Your article was successfully created"}',
    });
    cy.visit("/");
    cy.route({
      method: "POST",
      url: "http://localhost:3000/api/v1/auth/sign_in",
      response: "fixture:registration_response.json",
      headers: {
        uid: "journalist@mail.com",
      },
    });
    cy.get("#login").click();
    cy.get("#login-form").within(() => {
      cy.get("#email").type("journalist@mail.com");
      cy.get("#password").type("password");
      cy.get("#submit").click();
    });
  });
  it("journalist can create an article successfully", () => {
    cy.get("button").contains("Create Article").click();
    cy.get("#article-form").within(() => {
      cy.get("#title").type("Title");
      cy.get("#lead").type("Lead");
      cy.get("#content").type("This is content");
      cy.file_upload("img.jpeg", "#image-upload", "image/jpeg");
      cy.get("select#category").select("lifestyle");
      cy.get("button").contains("Save Article").click();
    });
  });
});
