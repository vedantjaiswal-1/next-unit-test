import { render } from '@testing-library/react';
import { AddEmployee } from '../../../../component/Employee/AddEmployee';

export {};

describe('Employee adding test', () => {
  test('pass empty string to test first name input field', () => {
    const { getByTestId } = render(<AddEmployee></AddEmployee>);

    const firstNameElement = getByTestId('first-name');
    const currentValue = firstNameElement.getAttribute('value');

    expect(currentValue).toEqual('');
  });

  test('pass sample string to test first name input field', () => {
    const { getByTestId } = render(<AddEmployee></AddEmployee>);

    const testFirstName = 'Tony';

    const firstNameElement = getByTestId('first-name');
    firstNameElement?.setAttribute('value', testFirstName);

    expect(firstNameElement.getAttribute('value')).toStrictEqual(testFirstName);
  });
});
