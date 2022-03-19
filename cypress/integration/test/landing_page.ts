/// <reference types="cypress" />

export {};
describe('Test Landing Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });
  
  it('Visit the landing page to localhost at port 3000', () => {
    cy.visit('http://localhost:3000/');
    cy.contains('Welcome to Employee Management');
  });

  it('Click on Employee Management and visit login page', () => {
    cy.contains('Employee Management').click();
    cy.url().should('include', '/login');
  });
});
