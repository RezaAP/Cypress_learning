/// <reference types="cypress"/>

describe('Delete API Testing', () => {
    it('Get API Testing', () => {
        cy.request({
            method: 'POST',
            url: 'https://reqres.in/api/register',
            failOnStatusCode: false // Tidak menandai status 204 sebagai error
        }).then((response) => {
            expect(response.status).to.eq(400)
            //expect(response.body).to.not.be.null
        })
    })
})