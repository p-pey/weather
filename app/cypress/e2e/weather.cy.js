/// <reference types="cypress" />

describe('Weather Component Interaction', () => {
  it('should get geolocation permission', () => {
    cy.visit('http://localhost:4001', {
      onBeforeLoad(win) {
        cy.stub(win.navigator.permissions, 'query').callsFake((params) => {
          if (params.name === 'geolocation') {
            return Promise.resolve({ state: 'granted' });
          }
          return Promise.resolve({ state: 'denied' });
        });

        cy.stub(win.navigator.geolocation, 'getCurrentPosition').callsFake((callback) => {
          callback({
            coords: {
              lat: 29.6343553,
              lon: 51.6198322,
            },
          });
        });
      },
    });
  });
  it('Should Show loading after permission granted', () => {
    cy.visit('http://localhost:4001');
    cy.get('[data-cy="weather"]').should('have.text', 'Getting Weather Data ...');
  });
  it('Should display data', () => {
    cy.visit('http://localhost:4001');
    cy.get('[data-cy="country"]').should('contain', 'Country:');
    cy.get('[data-cy="city"]').should('contain', 'City:');
    cy.get('[data-cy="population"]').should('contain', 'Population:');
  });
});
