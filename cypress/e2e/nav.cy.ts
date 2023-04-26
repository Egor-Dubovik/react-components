/// <reference types="cypress" />
describe('check nav', () => {
  it('test home link', () => {
    cy.visit('/');
    cy.contains('Home').click();
    cy.get('input[placeholder="Search..."]').should('exist');
    cy.url().should('include', '/');
  });

  it('test about link', () => {
    cy.visit('/');
    cy.contains('About Us').click();
    cy.url().should('include', '/about');
  });

  it('test form link', () => {
    cy.visit('/');
    cy.contains('Form').click();
    cy.url().should('include', '/form');
  });
});
