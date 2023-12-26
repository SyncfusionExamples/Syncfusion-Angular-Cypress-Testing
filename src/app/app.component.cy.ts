import { AppComponent } from './app.component';

describe('AppComponent', () => {
    it('should contain syncfusion Grid sample', () => {
        cy.mount(AppComponent)
        cy.get('.e-grid').should('be.visible')
    })

    it('should contain Grid rows', () => {
        cy.mount(AppComponent)
        cy.get('.e-grid').find('.e-row').should('have.length', 3)
    })
})