describe('Login-out Test - Parabank', () => {

    beforeEach(() => {
        cy.clearCookies();
        cy.clearLocalStorage();
    });

    it('1.Login with valid data', () => {
        cy.visit('/')
        cy.get('input[name="username"]').type('comefortest1')
        cy.get('input[name="password"]').type('1234567')
        cy.get('input[value="Log In"]').click()
        cy.contains('Welcome', { timeout: 10000 }).should('be.visible')
    })

    it('2.Login with invalid password', () => {
        cy.visit('/')
        cy.get('input[name="username"]').type('comefortest1')
        cy.get('input[name="password"]').type('0000000')
        cy.get('input[value="Log In"]').click()
        cy.contains('The username and password could not be verified.', { timeout: 10000 })
          .should('be.visible')
    })

    it('3.Login with blank fields', () => {
        cy.visit('/')
        // cy.get('input[name="username"]').type('fortest1')
        // cy.get('input[name="password"]').type('0000000')
        cy.get('input[value="Log In"]').click()
        cy.contains('Please enter a username and password.', { timeout: 10000 })
          .should('be.visible')
    })

    it('4.Logout from account', () => {
        cy.visit('/')
        cy.get('input[name="username"]').type('comefortest1')
        cy.get('input[name="password"]').type('1234567')
        cy.get('input[value="Log In"]').click()
        cy.contains('a', 'Log Out', { timeout: 10000 }).should('be.visible').click()
    })
})