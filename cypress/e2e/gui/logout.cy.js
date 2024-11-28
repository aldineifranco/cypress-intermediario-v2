describe("Logout", () => {
 beforeEach(() => {
  cy.login()
  cy.visit('/')
 })
 // No beforeEach tenho a pré condição do teste. Para executar a função de logout tenho que logar na aplicação e estar em localhost

 it("successfully", () => {
  cy.logout()

  cy.url().should('be.equal', `${Cypress.config('baseUrl')}/users/sign_in`)
 })
})