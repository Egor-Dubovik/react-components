/// <reference types="cypress" />
describe('check Form', () => {
  it('test form render', () => {
    cy.visit('/');
    cy.contains('Form').click();
    cy.get('form[id="user-form"]').should('exist');
  });

  it('test create card with valid data', () => {
    cy.visit('/');
    cy.contains('Form').click();
    cy.get('li[data-testid="user-item"]').should('not.exist');

    cy.get('input[name="name"]').type('John Doe Bon');
    cy.get('input[name="birthday"]').type('2000-01-01');
    cy.get('select[name="country"]').select('USA');
    cy.get('input[name="gender"][value="male"]').check();
    cy.get('input[name="agreement"]').check();
    cy.get('input[type="file"]').selectFile('src/assets/test-user-img.png');
    cy.get('button[type="submit"]').click();

    cy.get('li[data-testid="user-item"]').should('exist');
  });

  it('test form validation', () => {
    cy.visit('/');
    cy.contains('Form').click();

    cy.get('button[type="submit"]').click();
    cy.contains('Name is required');
    cy.contains('Birthday is required');
    cy.contains('Choose a country');
    cy.contains('Choose gender');
    cy.contains('You should agree');
    cy.contains('Choose a file');
  });
});
