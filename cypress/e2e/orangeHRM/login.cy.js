/// <reference types="cypress" />
import loginPage from "../../POM/Login/login.cy";
describe('Login feature', ()=>{
    it('User Login with valid credentials', () =>{

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        loginPage.verifyLoginPage().should('have.text','Login');
        loginPage.inputUsername().type('Admin');
        loginPage.inputPassword().type('admin123');
        
        //action summary (bisa)
        //cy.intercept('GET', '**/action-summary').as('actionSummary');
       
        //timeatwork (gabisa)
        //cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/time-at-work?timezoneOffset=7&currentDate=2024-11-26&currentTime=17:53').as('timeAtWork');
       
        //shortcuts (bisa)
        //cy.intercept('GET', '**/shortcuts').as('shortcuts');

        //locations (bisa)
        //cy.intercept('GET', '**/locations').as('locations');

        loginPage.buttonLogin().click();

        //ganti @berdasarkan kebutuhan
        //cy.wait('@locations');

        loginPage.dashboardPage().should('have.text','Dashboard');
    })
})