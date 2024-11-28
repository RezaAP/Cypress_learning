/// <reference types="cypress"/>

describe('POST Create User', () => {
    
    it('Test API Create User', () => {
        const requestBody = {
            name: "Reza",
            job: "QA Engineer"
        }
        cy.request('POST', 'https://reqres.in/api/users', requestBody).then((response) => {
          expect(response.status).to.eq(201)
          expect(response.body).to.not.be.null
          expect(response.body.name).to.eq(requestBody.name);
          expect(response.body.job).to.eq(requestBody.job)
        })
    })
  })