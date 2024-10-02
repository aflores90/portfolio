import About from "../../src/pages/About.vue";

it('uses custom text for the button label', () => {
    cy.mount(About)
    cy.get('h4').should('contains.text', 'About Page')
})