Cypress.Commands.add('criarConta', (firstname, lastname, email, psw, pwdConfirm) => {
  cy.get('#firstname').type(firstname)
  cy.get('#lastname').type(lastname)
  cy.get('#email_address').type(email)
  cy.get('#password').type(psw)
  cy.get('#password-confirmation').type(pwdConfirm)
  cy.contains('button', 'Create an Account').click()
})