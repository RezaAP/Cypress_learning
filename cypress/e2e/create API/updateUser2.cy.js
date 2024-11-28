/// <reference types="cypress"/>

describe('POST Create User', () => {
    
    it('Test API Create User', () => {
        const requestBody = {
            name: "Reza",
            job: "UI/UX"
        }
        cy.request('PATCH', 'https://reqres.in/api/users/2', requestBody).then((response) => {
          expect(response.status).to.eq(200)
          expect(response.body).to.not.be.null
          expect(response.body.name).to.eq(requestBody.name);
          expect(response.body.job).to.eq(requestBody.job)
        })
    })
  })