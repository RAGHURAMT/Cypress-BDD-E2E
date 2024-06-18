# Cypress-BDD-E2E
# Setup:
1. npm init
2. npm install cypress --save-dev  
3. npm i -D cypress cypress-cucumber-preprocessor
4. npm install --save-dev cypress-cucumber-preprocessor
5. npx cypress open
6. Add "const cucumber = require('cypress-cucumber-preprocessor').default" in cypress.config.js
7. Add "cypress-cucumber-preprocessor":{
    "nonGlobalStepDefinition":true,
    "step_defintions":"cypress/e2e/step-definitions"
  } in package.json file.
8. npm i --save-dev cypress-mochawesome-reporter