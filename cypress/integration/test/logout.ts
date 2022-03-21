///<reference types="cypress" />

export {};

describe('Logout', () => {
  before(() => {
    cy.visit('http://localhost:3000/employee/add');
  });

  it('Click on logout button', () => {
    cy.get('#logout').click();
    cy.clearLocalStorage();

    cy.url().should('equal', 'http://localhost:3000/');
  });
});
