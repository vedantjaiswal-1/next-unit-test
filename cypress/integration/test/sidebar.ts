///<reference types="cypress" />

export {};

describe('Sidebar Test', () => {
  before(() => {
    cy.visit('http://localhost:3000/employee/add');
  });

  it('Click on Employee Management or its icon', () => {
    cy.get('#icon').click();
    cy.url().should('equal', 'http://localhost:3000/');
    cy.wait(2000)
  });

  it('Click on add employee', () => {
    cy.visit('http://localhost:3000/employee/add');
    cy.get('#add-employee').click();
    cy.url().should('equal', 'http://localhost:3000/employee/add');
    cy.wait(2000)
  });

  it('Click on Manage employee', () => {
    cy.get('#manage-employee').click();
    cy.url().should('equal', 'http://localhost:3000/employee/manage');
  });
});
