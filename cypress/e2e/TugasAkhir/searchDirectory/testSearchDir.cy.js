import searchDir from "./searchDir.cy";

describe('Fitur Search Directory',()=>{
    beforeEach(()=>{
        searchDir.aksesWebsite();
        searchDir.verifikasiLogin().should('have.text','Login');
        searchDir.ketikUsername().type('Admin');
        searchDir.ketikPass().type('admin123');
        searchDir.klikLogin().click();
    })

    it('Sukses Search Employee data lengkap', () => {
        searchDir.klikDirectory().click();
        searchDir.masukkanNamaEmployee().type('Peter');
        cy.wait(3000);
        cy.get('div[role="listbox"]').first().click();
        searchDir.klikJobTitle();
        cy.contains('Chief Financial Officer').click();
        searchDir.klikLocation();
        searchDir.pilihLocation();
        searchDir.klikSearch();
        searchDir.gambarPeter();
    });
    
    it('Sukses search dengan nama saja', ()=>{
        searchDir.klikDirectory().click();
        searchDir.masukkanNamaEmployee().type('Peter');
        cy.wait(3000);
        cy.get('div[role="listbox"]').first().click();
        searchDir.klikSearch();
        searchDir.gambarPeter();
    })

    it('Invalid Nama Employee', () => {
        searchDir.klikDirectory().click();
        searchDir.masukkanNamaEmployee().type('Samsul');
        cy.wait(3000);
        cy.get('div[role="listbox"]').first().click();
        searchDir.invalidNamaEmployee();
    });
})