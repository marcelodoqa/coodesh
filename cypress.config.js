const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://demo.hyva.io/', // URL BASE PARA NAO FICAR CHAMANDO TODA HORA
    setupNodeEvents(on, config) {
      require('@shelex/cypress-allure-plugin/writer')(on, config)
      return config
    },
  },
})