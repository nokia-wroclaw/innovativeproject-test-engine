import {Deserializer} from 'jsonapi-serializer'

describe('Test', () => {
    it('Nothing', () => {
        cy.visit('/');

        cy.get('[data-cy=shopSelect]').should('not.have.attr', 'readonly', 'readonly');

        cy.get('[data-cy=editToggle]').click();

        cy.get('[data-cy=shopSelect]').should('have.attr', 'readonly', 'readonly')
    });

    it.only('2', () => {
        cy.jsonFixture('get_list.json').then(async (stores) => {

            cy.visit('/');

            cy.get('[data-cy=shopSelect]').click();
            console.log(stores)
            // const dupa = await new Deserializer().deserialize(data);
            // console.log(dupa);
        })
    })
});