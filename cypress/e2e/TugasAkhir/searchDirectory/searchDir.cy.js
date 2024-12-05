export default class directorySearch{
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

    static klikDirectory(){
        return cy.contains('a','Directory');
    }

    static masukkanNamaEmployee(){
        return cy.get('[placeholder="Type for hints..."]')
    }

    static klikJobTitle(){
        return cy.get('[class="oxd-select-text oxd-select-text--active"]').eq(0).click();
    }

    static pilihJobTitle(){
        return cy.get('[class="oxd-select-option"]').eq(4).click();
    }

    static klikLocation(){
        return cy.get('[class="oxd-select-text oxd-select-text--active"]').eq(1).click();
    }

    static pilihLocation(){
        return cy.get('[class="oxd-select-option"]').eq(3).click();
    }
    
    static klikSearch(){
        return cy.get('[type="submit"]').click();
    }

    static invalidNamaEmployee(){
        return cy.get('[class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message"]').contains('Invalid').should("be.visible");
    }

    static gambarPeter(){
        return cy.get('[src="/web/index.php/pim/viewPhoto/empNumber/3"]').should("be.visible");
    }
    
}