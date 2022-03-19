/// <reference types="cypress" />

export {};

describe('first Test', () => {
  it('check first test successfully!', () => {
    expect(true).to.equal(true);
  });

  it('Visit the landing page to localhost at port 3000', () => {
    cy.visit('http://localhost:3000/');

    cy.contains('Employee Management');
  });

  it('Click on employee management visit the login page', () => {
    cy.contains('Employee Management').click();
    cy.url().should('include', '/login');
  });

  it('Check the email input box', () => {
    cy.get('#exampleInputEmail').type('admin@gmail').should('have.value', 'admin@gmail');
  });

  it('Check the password input box', () => {
    cy.get('#exampleInputPassword').type('asdfqwer').should('have.value', 'asdfqwer');
  });

  it('Click on the login button', () => {
    cy.get('#loginbutton').click();
    cy.get('#error').should('have.text','Invalid Email');
    // cy.url().should('include', '/employee/add')
  });
});
