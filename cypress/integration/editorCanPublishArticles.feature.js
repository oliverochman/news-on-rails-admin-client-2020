describe('Editor can publish articles', () => {
  context("successfully", () => {
    before(() => {
      cy.server()
      cy.route({
        method: "POST",
        url: "http://localhost:3000/api/v1/auth/sign_in",
        response: "fixture:editor_login_response.json",
      });
      cy.route({
        method: "GET",
        url: "http://localhost:3000/api/v1/auth/**",
        response: "fixture:editor_login_response.json",
      })
      cy.visit('/')
      cy.get("#login-form").within(() => {
        cy.get("#email").type("journalist@mail.com");
        cy.get("#password").type("password");
        cy.get("#login-button").click();
      });
    })
  })

  it('', () => {

  })

})