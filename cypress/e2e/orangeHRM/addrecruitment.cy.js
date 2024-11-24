/// <reference types="cypress" />

describe('Add Recruitment', ()=>{
    it('User Login with valid credentials', () =>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.get('h5').contains('Login').should('have.text','Login');
        cy.get('[name="username"]').type('Admin');
        cy.get('[name="password"]').type('admin123');
        cy.get('[type="submit"]').click();
        cy.get('h6').contains('Dashboard').should('have.text','Dashboard');
        cy.contains('a', 'Recruitment').click();
        cy.get('h5').contains('Candidates').should('have.text','Candidates');
        cy.get('button').should('be.visible').contains('Add').click();
        cy.get('[name="firstName"]').type('Pak');
        cy.get('[name="middleName"]').type('Tua');
        cy.get('[name="lastName"]').type('Pintar');
        cy.contains('-- Select --').click();
        cy.contains('Payroll Administrator').click();
        cy.get('input[placeholder="Type here"]').eq(0).type('abcdtest@abc.com');
        cy.get('input[placeholder="Type here"]').eq(1).type('12345678910');
        cy.get('[type="submit"]').click();
        cy.contains('div', 'Pak Tua Pintar').should('exist');
    })
})