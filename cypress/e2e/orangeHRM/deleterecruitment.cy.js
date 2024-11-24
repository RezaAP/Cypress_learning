/// <reference types="cypress" />

describe('Delete Data Recruitment', ()=>{
    it('User delet recruitment data', () =>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.get('h5').contains('Login').should('have.text','Login');
        cy.get('[name="username"]').type('Admin');
        cy.get('[name="password"]').type('admin123');
        cy.get('[type="submit"]').click();
        cy.get('h6').contains('Dashboard').should('have.text','Dashboard');
        cy.contains('a', 'Recruitment').click();
        cy.contains('div', 'Pak Tua Pintar').should('exist');
        cy.get('button.oxd-icon-button').find('i.bi-trash').first().click();
        cy.get('button.oxd-button--label-danger') .contains('Yes, Delete').click();
        cy.contains('div', 'Pak Tua Pintar').should('not.exist');
    })
})