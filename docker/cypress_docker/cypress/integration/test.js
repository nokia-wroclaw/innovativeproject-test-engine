/// <reference types="Cypress" />

describe('Test', () => {
  it('Edit toggle should make store select box readonly', () => {
    cy.visit('/')
    cy.get('[data-cy=shopSelect]').should('not.have.attr', 'readonly', 'readonly')
    cy.get('[data-cy=editToggle]').click()
    cy.get('[data-cy=shopSelect]').should('have.attr', 'readonly', 'readonly')
  })

  it('Main panel should appear after store is selected', () => {
    cy.visit('/')
    cy.jsonFixture('get_list.json').then(stores => {
      cy.get('[data-cy=mainPanel]').should('not.exist')
      cy.selectStore(stores[0].name)
      cy.get('[data-cy=editToggle]').click()
      cy.get('[data-cy=mainPanel]').should('exist')
    })
  })

  it('Main panel should reappear after page reload if edit toggle is fixed', () => {
    cy.visit('/')
    cy.jsonFixture('get_list.json').then(stores => {
      cy.get('[data-cy=mainPanel]').should('not.exist')
      cy.selectStore(stores[0].name)
      cy.get('[data-cy=editToggle]').click()
      cy.visit('/')
      cy.get('[data-cy=mainPanel]').should('exist')
    })
  })
})
