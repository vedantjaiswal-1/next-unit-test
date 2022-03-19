export {};

describe('Test Login Page', () => {
  describe('Check Email input', () => {
    it('Check the empty email', () => {
      cy.visit('http://localhost:3000/login/');
      cy.get('#exampleInputEmail').should('not.have.value');
      cy.get('#loginbutton').click();
      cy.get('#email-error').should('have.text', 'Email is required');
    });

    it('Check the invalid email', () => {
      cy.get('#exampleInputEmail').type('admin@gmail', { delay: 100 }).should('have.value', 'admin@gmail');
      cy.get('#loginbutton').click();
      cy.get('#email-error').should('have.text', 'Invalid Email');
    });

    it('Check the valid email input', () => {
      cy.get('#exampleInputEmail').clear();
      cy.get('#exampleInputEmail').type('admin@gmail.com', { delay: 100 }).should('have.value', 'admin@gmail.com');
    });
  });

  describe('Check password input', () => {
    it('Check the empty password', () => {
      cy.get('#exampleInputPassword').should('not.have.value');
      cy.get('#loginbutton').click();
      cy.get('#password-error').should('have.text', 'Password is required');
    });

    it('Check the Invalid password', () => {
      //required 6 digit
      cy.get('#exampleInputPassword').type('asdf', { delay: 100 }).should('have.value', 'asdf');
      cy.get('#loginbutton').click();
      cy.get('#password-error').should('have.text', 'password must be at least 6 characters');
    });

    it('Check the valid password input element', () => {
      cy.get('#exampleInputPassword').clear();
      cy.get('#exampleInputPassword').type('asdfqwer', { delay: 100 }).should('have.value', 'asdfqwer');
    });
  });

  describe('Click on login button', () => {
    it('Redirect to the add employee page after successful login', () => {
      cy.get('#loginbutton').click();
      cy.url().should('include', '/employee/add');
      cy.url().should('equal', 'http://localhost:3000/employee/add')
    });
  });

  describe('Api Test', () => {
    it('Successful login with api', () => {
      cy.request('POST', 'http://localhost:3000/api/login', {
        email: 'admin@gmail.com',
        password: 'asdfqwer'
      }).then((response: any) => {
        window.localStorage.setItem('user', JSON.stringify(response.body));
      });
    });
  });
});
