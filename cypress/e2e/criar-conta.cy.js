import { faker } from '@faker-js/faker'

const firstname = faker.person.firstName()
const lastname = faker.person.lastName()
const email = faker.internet.email()

describe('Create account', () => {

  beforeEach(() => {
    cy.visit('/default/customer/account/create/')
  })
  it('CRIAR UMA CONTA COM SUCESSO SEM CUSTOM COMMAND', () => {

    cy.get('#firstname').type(firstname)
    cy.get('#lastname').type(lastname)
    cy.get('#email_address').type(email)
    cy.get('#password').type(cy.env('password'), { log: false })
    cy.get('#password-confirmation').type(cy.env('password'), { log: false })
    cy.contains('button', 'Create an Account').click()

    cy.get('.message.success').should('be.visible')
    cy.get('.message.success span').should('have.text', 'Thank you for registering with Main Website Store.')

  })
  it.only('CRIAR UMA CONTA COM SUCESSO COM CUSTOM COMMAND', () => {
    cy.criarConta(firstname, lastname, email, cy.env('password'), cy.env('password'))

    cy.get('.message.success span')
      .should('be.visible')
      .and('have.text', 'Thank you for registering with Main Website Store.')

  })
})