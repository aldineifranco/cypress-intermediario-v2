const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost',
    env: {
      // hideCredentials faz com que não as credenciais não fiquem expostas no header da requisição
      hideCredentials: true, 
      // requestMode para ter um feedback visual vindo do plugin api plugin-api. Dessa forma não preciso alterar o cy.request para cy.api
      requestMode: true,
    },
  },
  fixturesFolder: false,
  video: false,
})