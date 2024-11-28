/// <reference types="cypress"/>

describe('Reqres API Testing', () => {
    it('Get API Testing', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users/23',
            failOnStatusCode: false // Tidak menandai status 404 sebagai error
        }).then((response) => {
            expect(response.status).to.eq(404)
            //expect(response.body).to.not.be.null
        })
    })
})

