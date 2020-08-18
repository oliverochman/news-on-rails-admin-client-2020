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
      });

      cy.route({
        method: 'GET',
        url: 'http://localhost:3000/api/v1/articles**',
        response: "fixture:unpublish_articles.json",
      });

      cy.route({
        method: 'GET',
        url: 'http://localhost:3000/api/v1/articles/1',
        response: "fixture:show_article_response.json",
      });

      cy.route({
        method: 'PUT',
        url: 'http://localhost:3000/api/v1/articles/1',
        response: "fixture:publish_article_response.json",
      });

      cy.visit('/')

      cy.get("#login-form").within(() => {
        cy.get("#email").type("journalist@mail.com");
        cy.get("#password").type("password");
        cy.get("#login-button").click();
      });

      cy.get('#article-1').within(() => {
        cy.get('#view-article').click({force: true})
      })
    })

    it('and gets succes message', () => {
      cy.get("#publish-article").click({force: true})
      cy.get("#message").should("contain", "Article was successfully published")
    })
  })

})