// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
import { Deserializer } from 'jsonapi-serializer'

Cypress.Commands.add('jsonFixture', (path) => {
  return cy.fixture(path).then(mock => {
    const { links, meta, ...data } = mock.response.payload['data']
    return new Deserializer().deserialize(data).then(
      deserialized => deserialized
    )
  })
})

Cypress.Commands.add('selectStore', (name) => {
  cy.get('[data-cy=shopSelect]').should('not.have.attr', 'readonly', 'readonly')
  cy.get('[data-cy=shopSelect]').click()
  cy.contains(name).click()
})
