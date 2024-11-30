import lupaPass from "./forgotPass.cy";

describe('Fitur Lupa Password', ()=>{
    beforeEach(()=>{
        lupaPass.aksesWebsite();
    })

    it('Sukses Ganti Password', () => {
        lupaPass.klikForgot().click();
        lupaPass.cekReset().should('have.text','Reset Password')
        lupaPass.ketikUsername().type('Admin');
        lupaPass.klikReset().click();
        lupaPass.statusReset().should('have.text','Reset Password link sent successfully')
    });

    it('Ganti Password (wrong username)', () => {
        lupaPass.klikForgot().click();
        lupaPass.cekReset().should('have.text','Reset Password')
        lupaPass.ketikUsername().type('Admin');
        lupaPass.klikReset().click();
        lupaPass.statusReset().should('have.text','Reset Password link sent successfully')
    });

    it('Ingin ganti, tapi tidak jadi', () => {
        lupaPass.klikForgot().click();
        lupaPass.cekReset().should('have.text','Reset Password');
        lupaPass.klikCancel().click();
        lupaPass.verifikasiLoginPage().should('have.text','Login')
    });
})