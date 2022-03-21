/// <reference types= "cypress" />

export {};

describe('Employee Page Test', () => {
  describe('Edit employee', () => {
    it('loads the employee', () => {
      cy.visit('http://localhost:3000/employee/manage');
      cy.request('GET', 'http://localhost:3000/api/employee');
    });

    it('Click on edit button to edit employee', () => {
      cy.request('GET', 'http://localhost:3000/api/employee').then((response: any) => {
        const EmployeeId = response.body[0]._id;

        //Click on edit button of the first employee
        cy.get('#edit-link').click();
        cy.url().should('equal', `http://localhost:3000/employee/add/${EmployeeId}`);

        //edit the name
        cy.get('#first-name').clear().type('Dominic', { delay: 100 }).should('have.value', 'Dominic');
        cy.get('#last-name').clear().type('Toretto', { delay: 100 }).should('have.value', 'Toretto');

        //save the edit name
        cy.get('#add-button').click();
        cy.url().should('equal', 'http://localhost:3000/employee/manage');
      });
    });

    it('Edit the employee with the api', () => {
      cy.request('GET', 'http://localhost:3000/api/employee').then((response: any) => {
        const EmployeeId = response.body[1]._id;

        //edit the second employee name
        cy.request('PUT', `http://localhost:3000/api/employee/${EmployeeId}`, {
          first_name: 'Robert',
          last_name: 'Downey'
        });

        cy.reload();
      });
    });
  });

  describe('Delete Employee', () => {
    it('Click on delete button to delete employee', () => {
      cy.request('GET', 'http://localhost:3000/api/employee').then((response: any) => {
        const EmployeeId = response.body[2]._id;

        //Click on delete button of the third employee
        cy.get('#edit-link').click();
        cy.request('DELETE', `http://localhost:3000/api/employee/${EmployeeId}`);
        cy.reload();
      });
    });

    it('Delete the employee with the api', () => {
      cy.request('GET', 'http://localhost:3000/api/employee').then((response: any) => {
        const EmployeeId = response.body[1]._id;

        //edit the second employee name
        cy.request('Delete', `http://localhost:3000/api/employee/${EmployeeId}`);

        cy.reload();
      });
    });
  });
});
