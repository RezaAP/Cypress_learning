/// <reference types="cypress" />

describe('Login feature', ()=>{
    it('User Login with valid credentials', () =>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.get('h5').contains('Login').should('have.text','Login');
        cy.get('[name="username"]').type('Admin');
        cy.get('[name="password"]').type('admin123');
        cy.get('[type="submit"]').click();
        cy.get('h6').contains('Dashboard').should('have.text','Dashboard');
        cy.contains('a', 'Recruitment').click();
        cy.contains('div', 'Pak Tua Pintar').should('exist');
        cy.get('.oxd-table-row').contains('Pak Tua Pintar').parents('.oxd-table-row').find('button i.oxd-icon.bi-eye-fill').click();
        cy.get('h6').contains('Application Stage').should('have.text','Application Stage');
        cy.contains('button', 'Reject').click();
        cy.get('[type="submit"]').click();
        cy.contains('p.oxd-text', 'Status: Rejected').should('be.visible');
    })
})