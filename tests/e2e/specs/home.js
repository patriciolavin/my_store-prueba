describe('Landing Page', () => {
    it('Toggle the hamburger button', () => {
        cy.viewport('iphone-6')
        cy.visit('/')
        cy.get('#navbarMenu').should('not.have.css', 'display', 'block')
    })
})

