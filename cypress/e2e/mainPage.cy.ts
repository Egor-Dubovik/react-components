/// <reference types="cypress" />
describe('test main page', () => {
  it('test render Serach form', () => {
    cy.visit('/');
    cy.get('input').should('have.value', 'something');
    cy.get('button').should('have.text', 'Submit');
    cy.get('button[data-testid="reset-button"]').should('exist');
  });

  it('test reset and type search', () => {
    cy.visit('/');
    cy.get('button[data-testid="reset-button"]').click();
    cy.contains('No results').should('be.visible');
    cy.get('input').type('Car').should('have.value', 'Car');
  });

  it('test redner searched photo cards and redux', () => {
    cy.visit('/');
    cy.get('input').clear().type('Car').should('have.value', 'Car');
    cy.get('li[data-testid="photo-card"]').should('have.length', 12);

    cy.contains('About Us').click();
    cy.url().should('include', '/about');
    cy.contains('Home').click();

    cy.get('input').should('exist');
    cy.get('li[data-testid="photo-card"]').should('have.length', 12);
  });

  it('test switch modal', () => {
    cy.visit('/');
    cy.get('div[data-testid="overlay"]').should('not.exist');

    cy.get('li').eq(0).click();
    cy.get('div[data-testid="overlay"]').should('exist');

    cy.get('button[data-testid="modal-button"]').click();
    cy.get('div[data-testid="overlay"]').should('not.exist');
  });
});
