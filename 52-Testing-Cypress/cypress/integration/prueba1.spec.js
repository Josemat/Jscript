/// <reference types="cypress"/>

describe('Prueba primera en cypress',()=>{
    it('Carga la pagina principal',()=>{
        cy.visit('http://127.0.0.1:5500/52-Testing-Cypress/index.html');
        //Verifica si existe y su contenido
        cy.contains('h1','Administrador de Pacientes de Veterinaria');
        //Verifica si existe
        cy.get('h1').should('exist')//Esto es declarado mala practica porque es muy generico
        cy.get('[data-cy="titulo-proy"]').should('exist');//Ésto es buena practica y obtenemos el mismo resultado
        //Otro metodo para ver si existe y contiene
        cy.get('[data-cy="titulo-proy"]')
            .invoke('text')
                .should('equal','Administrador de Pacientes de Veterinaria')
    })
})