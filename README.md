# Cypress E2E Testing for OrangeHRM
- This repository contains end-to-end (E2E) tests for the OrangeHRM application using Cypress. The tests are organized using the Page Object Model (POM) to ensure maintainability and readability.

# Project Structure
cypress/integration: Contains the test specifications.
cypress/support/pom: Contains the Page Object Model (POM) classes for different pages of the application.
# Key Features
Login Tests: Verifies the login functionality with valid and invalid credentials.
Directory Tests: Searches for users in the directory with specific job titles and locations.
Intercept Tests: Mocks network requests to test the application's behavior with different responses.

# How to Run the Tests
1. Clone the repository:
git clone https://github.com/your-username/orangehrm-cypress-tests.git
cd orangehrm-cypress-tests

2. Install the dependencies:
npm install

3. Run the tests:
npx cypress open


