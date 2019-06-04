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

  it ('Edit toggle should make Select Section readonly ', () => {
    cy.visit('/')
    cy.jsonFixture('get_list.json').then(stores => {
      cy.get('[data-cy=mainPanel]').should('not.exist')
      cy.selectStore(stores[0].name)
      cy.get('[data-cy=editToggle]').click()
      cy.get('[data-cy=mainPanel]').should('exist')
      cy.get('[data-cy=sectionsSelect]')
            .should('not.have.attr', 'readonly', 'readonly')
      cy.get('[data-cy=sectionsEdit]').click()
      cy.get('[data-cy=sectionsSelect]')
            .should('have.attr', 'readonly', 'readonly')
      cy.get('[data-cy=cancelAlarmButton]')
    })
  })

  it ('Confirm button should be readonly untill notification in selected', () => {
    cy.visit('/')
    cy.jsonFixture('get_list.json').then(stores => {
      cy.selectStore(stores[0].name)
      cy.get('.layout > [data-v-37744f17=""][type="button"]')
        .should('have.attr', 'disabled', 'disabled')
      cy.get('tr > :nth-child(1) > .v-input > .v-input__control > .v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple')
        .click()
        cy.get('.layout > [data-v-37744f17=""][type="button"]')
          .should('not.have.attr', 'disabled', 'disabled')
    })
  })

  it ('Confirming alarm should bring up warning. Canceling it sould make it disapear', () => {
    cy.visit('/')
    cy.jsonFixture('get_list.json').then(stores => {
      cy.selectStore(stores[0].name)
      cy.get('[data-cy=alarmsPanel]')
        .should('not.be.visible')
      cy.get('tr > :nth-child(1) > .v-input > .v-input__control > .v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple')
        .click()
      cy.get('.layout > [data-v-37744f17=""][type="button"]')
        .click()
      cy.get('[data-cy=alarmsPanel]')
        .should('be.visible')
      cy.get('[data-cy=cancelAlarmButton]')
        .click()
      cy.get('[data-cy=alarmsPanel]')
        .should('not.be.visible')

    })
  })

  it ('Clicking "Show More" button should bring up "Notifications" screen. Clicking "X" button should close it', () => {
    cy.visit('/')
    cy.jsonFixture('get_list.json').then(stores => {
      cy.selectStore(stores[0].name)
      cy.get('[data-cy=notificationTable]')
        .should('not.be.visible')
      cy.get('[data-cy=showMoreButton]')
        .click()
      cy.get('[data-cy=notificationTable]')
        .should('be.visible')
      cy.get('[data-cy=notificationsExitButton]')
        .click();
      cy.get('[data-cy=notificationTable]')
        .should('not.be.visible')
    })
  })

  it ('In "Notifications" screen confirming alarm should bring up warning. Canceling it sould make it disapear', () => {
    cy.visit('/')
    cy.jsonFixture('get_list.json').then(stores => {
      cy.selectStore(stores[0].name)
      cy.get('[data-cy=showMoreButton]')
        .click()
      cy.get('.elevation-1 > .v-table__overflow > .v-datatable > tbody > tr > :nth-child(1) > .v-input > .v-input__control > .v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple')
        .click()
      cy.get('[data-cy=notificationsConfirmButton]')
        .click()
      cy.get('[data-cy=fullscreenAlarmsPanel]')
        .should('be.visible')
      cy.get('[data-cy=fullscreenCancelAlarmButton]')
        .click()
      cy.get('[data-cy=fullscreenAlarmsPanel]')
        .should('not.be.visible')
    })
  })

  it ('Typing something in search box in "Notifications" menu', () => {
    cy.visit('/')
    cy.jsonFixture('get_list.json').then(stores => {
      cy.selectStore(stores[0].name)
      cy.get('[data-cy=notificationTable]')
        .should('not.be.visible')
      cy.get('[data-cy=showMoreButton]')
        .click()
      cy.get('[data-cy=notificationsSearchBox]')
        .type('sample_text')
        .should('have.value', 'sample_text')
    })
  })

  it ('Clicking "X" button next to search box in "Notifications" menu should clear it', () => {
    cy.visit('/')
    cy.jsonFixture('get_list.json').then(stores => {
      cy.selectStore(stores[0].name)
      cy.get('[data-cy=notificationTable]')
        .should('not.be.visible')
      cy.get('[data-cy=showMoreButton]')
        .click()
      cy.get('[data-cy=notificationsSearchBox]')
        .type('sample_text')
      cy.get(':nth-child(2) > .v-input > .v-input__control > .v-input__slot > :nth-child(2) > .v-input__icon > .v-icon')
        .click()
        cy.get('[data-cy=notificationsSearchBox]')
          .should('not.have.value', 'sample_text')
    })
  })

})
