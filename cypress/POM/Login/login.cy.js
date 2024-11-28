export default class loginPage{
    static verifyLoginPage(){
        return cy.get('h5').contains('Login');
    }

    static inputUsername(){
        return cy.get('[name="username"]').type('Admin');
    }

    static inputPassword(){
        return cy.get('[name="password"]').type('admin123');
    }

    static buttonLogin(){
        return cy.get('[type="submit"]').click();
    }

    static dashboardPage(){
        return cy.get('h6').contains('Dashboard')
    }
}