export default class lupaPass{
    static aksesWebsite(){
        return cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    }

    static verifikasiLoginPage(){
        return cy.get('h5').contains('Login');
    }

    static klikForgot(){
        return cy.get('[class="oxd-text oxd-text--p orangehrm-login-forgot-header"]');
    }

    static cekReset(){
        return cy.get('h6').contains('Reset Password');
    }

    static ketikUsername(){
        return cy.get('[name="username"]');
    }

    static klikReset(){
        return cy.get('[type="submit"]');
    }

    static statusReset(){
        return cy.get('h6').contains('Reset Password link sent successfully');
    }

    static klikCancel(){
        return cy.get('[type="button"]');
    }
}

