/// <reference types="cypress"/>

describe('Delete API Testing', () => {
    it('Get API Testing', () => {
        cy.request({
            method: 'DELETE',
            url: 'https://reqres.in/api/users/2',
            failOnStatusCode: false // Tidak menandai status 204 sebagai error
        }).then((response) => {
            expect(response.status).to.eq(204)
            //expect(response.body).to.not.be.null
        })
    })
})