/// <reference types="cypress"/>

describe('Single Resouces',() =>{
    it('Test API ', () =>{
        cy.request('GET', 'https://reqres.in/api/users?page=2').then((response) =>{
            expect(response.status).to.eq(200)
            expect(response.body).to.not.be.null
        })
    })
})