describe('Test', () => {
    it('Nothing', () => {
        cy.visit('/');

        cy.get('[data-cy=shopSelect]').should('not.have.attr', 'readonly', 'readonly');

        cy.get('[data-cy=editToggle]').click();

        cy.get('[data-cy=shopSelect]').should('have.attr', 'readonly', 'readonly')
    })
});