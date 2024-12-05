export default class halamanLogin{
    static aksesWebsite(){
        return cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    }

    static verifikasiLogin(){
        return cy.get('h5').contains('Login');
    }

    static ketikUsername(){
        return cy.get('[name="username"]');
    }

    static ketikPass(){
        return cy.get('[name="password"]');
    }

    static klikLogin(){
        return cy.get('[type="submit"]');
    }

    static halDashboard(){
        return cy.get('h6').contains('Dashboard');
    }

    static invalidCredential(){
        return cy.get('p').contains('Invalid credentials').should('be.visible');
    }

    static required(){
        return cy.get('[class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message"]').contains('Required').should('be.visible');
    }
}