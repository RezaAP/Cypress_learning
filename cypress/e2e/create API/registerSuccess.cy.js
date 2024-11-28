/// <reference types="cypress"/>

describe('Reqres API Testing', () => {
    const requestBody = {
        email: "abcd@ee.com",
        password: "12345"
    }
    it('Register Success Testing', () => {
      cy.request('POST', 'https://reqres.in/api/register')
        .then((response) => {
          expect(response.status).to.eq(200)
          expect(response.body).to.not.be.null
          expect(response.body.email).to.eq(requestBody.email);
          expect(response.body.password).to.eq(requestBody.password)
        })
    })
  })