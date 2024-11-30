import halamanLogin from "./login.cy"


describe ('Fitur Login', ()=>{
    beforeEach(()=>{
        halamanLogin.aksesWebsite();
        halamanLogin.verifikasiLogin().should('have.text','Login')
    })

    it('Success Login', ()=>{
        halamanLogin.ketikUsername().type('Admin');
        halamanLogin.ketikPass().type('admin123');
        cy.intercept('GET', '**/action-summary').as('actionSummary');
        halamanLogin.klikLogin().click();
        cy.wait('@actionSummary');
    })

    it('Invalid Credentials (wrong username and wrong password)', () => {
        halamanLogin.ketikUsername().type('Halo');
        halamanLogin.ketikPass().type('Haloha');
        halamanLogin.klikLogin().click();
        halamanLogin.invalidCredential();
    });

    it('Invalid Credentials (Correct username and wrong password)', () => {
        halamanLogin.ketikUsername().type('Admin');
        halamanLogin.ketikPass().type('Haloha');
        halamanLogin.klikLogin().click();
        halamanLogin.invalidCredential();
    });

    it('Invalid Credentials (wrong username and correct password)', () => {
        halamanLogin.ketikUsername().type('Halo');
        halamanLogin.ketikPass().type('admin123');
        halamanLogin.klikLogin().click();
        halamanLogin.invalidCredential();
    });

})
