# 🏦 Parabank Login & Registration Testing Project

This project demonstrates my skills in **Manual Testing** and **Automation Testing** using Cypress, based on the demo banking website [Parabank](https://parabank.parasoft.com/).

## 🔧 Tools & Technologies Used
- **Manual Testing**
  - Test case design
  - Bug reporting
- **Automation Testing**
  - Cypress (JavaScript)
  - GitHub Actions (CI/CD)
- **Others**
  - Git & GitHub for version control
  - Google Sheets (for test documentation)

## 📄 Documents
- ✅ **Test Case**: [View on Google Sheets](https://docs.google.com/spreadsheets/d/1T7lSwCS1kmX2i_17C3mPPUI0c7imPPV4SrPpLT7P8Vs/edit?usp=sharing)
- 🐞 **Bug Report**: [View on Google Sheets](https://docs.google.com/spreadsheets/d/1T7lSwCS1kmX2i_17C3mPPUI0c7imPPV4SrPpLT7P8Vs/edit?usp=sharing)

## 🚀 Installation & Running Tests

1. Clone the repository and install dependencies:

    ```bash
    git clone https://github.com/yourusername/Parabank-test.git
    cd Parabank-test
    npm ci
    ```

2. Run tests locally:

    - Headed mode (with UI):

      ```bash
      npx cypress open
      ```

    - Headless mode:

      ```bash
      npx cypress run
      ```

---

## 🛠️ Project Structure

- `cypress/e2e/Login.cy.js` — Tests for login and logout flows  
- `cypress/e2e/Register.cy.js` — Tests for user registration  
- `cypress.config.js` — Cypress configuration file  
- `.github/workflows/cypress.yml` — GitHub Actions workflow file

## ✨ Highlights
- Covered **positive** and **negative** scenarios
- Clear separation of manual and automation work
- Continuous Integration setup with **GitHub Actions**
