# OrangeHRM Cypress Tests

This repository contains automated tests for the login feature of OrangeHRM using Cypress. The tests are designed to validate various login scenarios on the OrangeHRM demo site.

## Project Overview
* Purpose: Automate testing of the OrangeHRM login functionality.
* Tools: Cypress for end-to-end testing.
* Website: https://opensource-demo.orangehrmlive.com/
-----
## Prerequisites
Before running the tests, ensure you have the following installed:
* Node.js (version 16 or higher recommended)
* npm (comes with Node.js)
* Git (for cloning the repository)

Tests Included
The following test cases are implemented in cypress/e2e/orangehrm_login_tests.js:
* TC_Login_01: Login with valid credentials (username: "Admin", password: "admin123").
* TC_Login_02: Login with invalid credentials (username: "InvalidUser", password: "wrongpass").
* TC_Login_03: Login with empty username.
* TC_Login_04: Login with empty password.
* TC_Login_05: Login with special characters in username and password.

Project Structure
- cypress/e2e/orangehrm_login_tests.js: Main test file containing all test cases.
- cypress.config.js: Cypress configuration file.
- package.json: Project dependencies and scripts.
- .gitignore: Excludes node_modules, cypress/videos, and cypress/screenshots from version control.
