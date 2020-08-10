describe("Journalist can create article", () => {
  beforeEach(() => {
    cy.server()
    cy.visit("/")
    cy.route({
      method: "POST",
      url: "http://localhost:3000/api/v1/auth",
      response: "fixture:registration_response.json",
      headers: {
        uid: "journalist@mail.com"
      }
    })
    cy.get("#login-form").within(() => {
      cy.get("#email").type("journalist@mail.com")
      cy.get("#password").type("password")
      cy.get("button").contains("Login").click()
    })
  })

  it("journalist can click on create article", () => {
  cy.get("button").contains("Create Article").click()
  cy.get("article-form").within(() => {
    cy.get("#title").type("Title")
    cy.get("#lead").type("Lead")
    cy.get("#content").type("This is content")
    cy.get("button").contains("Save Article").click()
  })

  it("journalist can see saved article on login")
  cy.get("article").contains("This is content")
})
})