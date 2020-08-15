describe("Journalist can create article", () => {
  context("successfully", () => {
    beforeEach(() => {
      cy.server();
      cy.route({
        method: "POST",
        url: "http://localhost:3000/api/v1/articles",
        response: '{"message": "Your article was successfully created"}',
      });
      cy.route({
        method: "POST",
        url: "http://localhost:3000/api/v1/auth/sign_in",
        response: "fixture:registration_response.json",
      });
      cy.route({
        method: "GET",
        url: "http://localhost:3000/api/v1/auth/**",
        response: "fixture:registration_response.json",
      })
      cy.visit('/')
      cy.get("#login").click();
      cy.get("#login-form").within(() => {
        cy.get("#email").type("journalist@mail.com");
        cy.get("#password").type("password");
        cy.get("#login-button").click();
      });
    });
    it("journalist can create an article successfully", () => {
      cy.get("button").contains("Create Article").click();
      cy.get("#article-form").within(() => {
        cy.get("#title").type("Title");
        cy.get("#lead").type("Lead");
        cy.get("#category").click();
        cy.get("div[role='option']").contains("Lifestyle").click();
        cy.get("#content").type("This is content");
        cy.file_upload("img.jpeg", "#image-upload", "image/jpeg");
        cy.get("button").contains("Save Article").click();
      });
      cy.get("p#response-message").should(
        "contain",
        "Your article was successfully created"
      );
    });
  });

  context("unsuccessfully", () => {
    beforeEach(() => {
      cy.server();
      cy.route({
        method: "POST",
        url: "http://localhost:3000/api/v1/articles",
        response: { message: "Title can't be blank" },
      });
      cy.route({
        method: "POST",
        url: "http://localhost:3000/api/v1/auth/sign_in",
        response: "fixture:registration_response.json",
      });
      cy.route({
        method: "GET",
        url: "http://localhost:3000/api/v1/auth/**",
        response: "fixture:registration_response.json",
      })
      cy.visit('/')
      cy.get("#login").click();
      cy.get("#login-form").within(() => {
        cy.get("#email").type("journalist@mail.com");
        cy.get("#password").type("password");
        cy.get("#login-button").click();
      });
    });
    it("unsuccessfully without title", () => {
      cy.get("button").contains("Create Article").click();
      cy.get("#article-form").within(() => {
        cy.get("#lead").type("Lead");
        cy.get("#category").click();
        cy.get("div[role='option']").contains("Lifestyle").click();
        cy.get("#content").type("This is content");
        cy.file_upload("img.jpeg", "#image-upload", "image/jpeg");
        cy.get("button").contains("Save Article").click();
      });
      cy.get("p#response-message").should("contain", "Title can't be blank");
    });
  });
});
