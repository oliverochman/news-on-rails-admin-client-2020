describe('Journalist can login', () => {
  context('Successfully', () => {
    before(() => {
      cy.server()
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
    })

    it('Journalist can login', ()=> {
      cy.get("#login-form").within(() => {
        cy.get("#email").type("journalist@mail.com");
        cy.get("#password").type("password");
        cy.get("#login-button").click();
      });
      cy.get("#create-article").contains("Create Article").should('be.visible');
    })
  })

  context('Unsucessfully', () => {
    beforeEach(() => {
      cy.server();
      cy.route({
        method: "POST",
        url: "http://localhost:3000/api/v1/auth/sign_in",
        response: '{"message": "Invalid credentials"}',
        status: "401"
      });
      cy.visit('/')
    })
    it('with invalid credentials', () => {
      cy.get("#login-form").within(() => {
        cy.get("#email").type("Viktor@mail.com");
        cy.get("#password").type("password");
        cy.get("#login-button").click();
      });
      cy.get('#create-article').should('not.exist');
    })
  })


})

