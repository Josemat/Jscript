/// <reference types="cypress"/>

describe('Completar datos de formulario',()=>{
    it('carga la pagina principal',()=>{
        cy.visit('http://127.0.0.1:5500/52-Testing-Cypress/index.html');

        cy.get('[data-cy=mascota-input]')
            .type('Emmanuel')
        cy.get('[data-cy=propietario-input]')
            .type('Karen')
        cy.get('[data-cy=telefono-input]')
            .type('0123898123')
        cy.get('[data-cy=date-input]')
            .type('2022-03-10')
        cy.get('[data-cy=time-input]')
            .type('12:30')
        cy.get('[data-cy=text-input]')
            .type('Solo caga')
        cy.get('[data-cy=submit-form]').click()
        // cy.get('[data-cy="button-form"]')
        //     .submit()

        cy.get('[data-cy=citas-heading]')
            .invoke('text')
            .should('equal','Administra tus Citas ')
            
    })

    

})