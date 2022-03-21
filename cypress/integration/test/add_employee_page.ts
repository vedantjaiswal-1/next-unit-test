/// <reference types="cypress" />

export {};

describe('Add employee page test', () => {
  before(() => {
    cy.visit('http://localhost:3000/employee/add/');
  });

  describe('Check First name input', () => {
    it('Check the empty first name', () => {
      cy.get('#first-name').should('not.have.value');
      cy.get('#add-button').click();
      cy.get('#first-name-error').should('have.text', 'First Name is required');
    });

    it('Check the first name input with value', () => {
      cy.get('#first-name').type('Michel', { delay: 100 }).should('have.value', 'Michel');
    });
  });

  describe('Check Last name input', () => {
    it('Check the empty last name', () => {
      cy.get('#last-name').should('not.have.value');
      cy.get('#add-button').click();
      cy.get('#last-name-error').should('have.text', 'Last Name is required');
    });

    it('Check the last name input with value', () => {
      cy.get('#last-name').type('Jackson', { delay: 100 }).should('have.value', 'Jackson');
    });
  });

  describe('Click on add button', () => {
    it('Click on add button to add the first and last name', () => {
      cy.get('#add-button').click();
      cy.url().should('include', '/employee/manage');
      cy.url().should('equal', 'http://localhost:3000/employee/manage');
    });
  });

  describe('Api Test', () => {
    it('Successful add employee with api', () => {
      cy.request('POST', 'http://localhost:3000/api/employee', {
        first_name: 'Remo',
        last_name: 'Dsauza'
      }).then((response: any) => {
        window.localStorage.setItem('employee', JSON.stringify(response.body));
        cy.reload()
      });
    });
  });
});
