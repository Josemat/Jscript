/// <reference types="cypress"/>


describe('Valida el formulario',()=>{
    it('Submit al formulario y mostrar la alerta de error',()=>{
        cy.visit('http://127.0.0.1:5500/52-Testing-Cypress/index.html'); //Visitamos la pagina para auditar
        cy.get('[data-cy="button-form"]')
            .submit();
        cy.get('[data-cy="form"]')
        .invoke('text','Todos los campos son Obligatorios')
        cy.get('[data-cy="form"]')
            .should('have.class','alert-danger') //Selector de clases de css
            
    })
})