import { render } from '@testing-library/react';
import { ManageEmployee } from '../../../../component/Employee/ManageEmployee';

export {};

describe('Employee Manage Test', () => {
  test('check table render correctly', () => {
    const { getByRole } = render(<ManageEmployee />);

    const serialNumber = getByRole('columnheader', {
      name: /sr\. no/i
    });
    const firstName = getByRole('columnheader', {
      name: /first name/i
    });

    const lastName = getByRole('columnheader', {
      name: /last name/i
    });
    const action = getByRole('columnheader', {
      name: /action/i
    });
    expect(serialNumber.textContent).toBe('Sr. No');
    expect(firstName.textContent).toBe('First Name');
    expect(lastName.textContent).toBe('Last Name');
    expect(action.textContent).toBe('Action');
  });
});
