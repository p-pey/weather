
/// <reference types="cypress" />
describe('Render Root Component', ()=> {
       it('Should render to the screen', ()=> {
              cy.visit('http://localhost:4001');
              cy.get("#root").should('be.visible');
       })
})