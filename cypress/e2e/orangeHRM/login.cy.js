/// <reference types="cypress" />

describe('Login feature', ()=>{
    it('User Login with valid credentials', () =>{

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        //cy.get('h5').contains('Login').should('have.text','Login');
        cy.get('[name="username"]').type('Admin');
        cy.get('[name="password"]').type('admin123');
        
        //action summary (bisa)
        //cy.intercept('GET', '**/action-summary').as('actionSummary');
       
        //timeatwork (gabisa)
        //cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/time-at-work?timezoneOffset=7&currentDate=2024-11-26&currentTime=17:53').as('timeAtWork');
       
        //shortcuts (bisa)
        //cy.intercept('GET', '**/shortcuts').as('shortcuts');

        //id (bisa)
        cy.intercept('GET', '**/locations').as('locations');

        cy.get('[type="submit"]').click();

        //ganti @berdasarkan kebutuhan
        cy.wait('@locations');

        cy.get('h6').contains('Dashboard').should('have.text','Dashboard');
    })
})