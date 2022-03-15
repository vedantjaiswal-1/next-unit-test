import { fireEvent, render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { AddEmployee } from '../../../../component/Employee/AddEmployee';

export {};

describe('Employee adding test', () => {
  describe('First Name input field', () => {
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

    test('check first name label visibility', () => {
      const { getByLabelText } = render(<AddEmployee />);

      const firstNameElement = getByLabelText('First Name');
      expect(firstNameElement).toBeVisible;
    });

    test('check first name placeholder visibility', () => {
      const { getByPlaceholderText } = render(<AddEmployee />);

      const firstNameElement = getByPlaceholderText('First Name');
      expect(firstNameElement).toBeVisible;
    });
  });

  describe('Last Name input field', () => {
    test('pass empty string to test last name input field', () => {
      const { getByTestId } = render(<AddEmployee></AddEmployee>);

      const lastNameElement = getByTestId('last-name');
      const currentValue = lastNameElement.getAttribute('value');

      expect(currentValue).toEqual('');
    });

    test('pass sample string to test last name input field', () => {
      const { getByTestId } = render(<AddEmployee></AddEmployee>);

      const testlastName = 'Tony';

      const lastNameElement = getByTestId('last-name');
      lastNameElement?.setAttribute('value', testlastName);

      expect(lastNameElement.getAttribute('value')).toStrictEqual(testlastName);
    });

    test('check last name label visibility', () => {
      const { getByLabelText } = render(<AddEmployee />);

      const lastNameElement = getByLabelText('Last Name');
      expect(lastNameElement).toBeVisible;
    });

    test('check last name placeholder visibility', () => {
      const { getByPlaceholderText } = render(<AddEmployee />);

      const lastNameElement = getByPlaceholderText('Last Name');
      expect(lastNameElement).toBeVisible;
    });
  });

  describe('Add button test', () => {
    test('check button with name "add" ', () => {
      const { getByTestId } = render(<AddEmployee />);

      const addButtonElement = getByTestId('add-btn');
      expect(addButtonElement.textContent).toBe('Add');
    });

    test('call onSubmit function on Add button', async () => {
      const mockOnSubmit = jest.fn();
      const { getByLabelText, getByRole } = render(<AddEmployee onSubmit={mockOnSubmit} />);

      await act(async () => {
        fireEvent.change(getByLabelText('First Name'), { target: { value: 'Tony' } });
        fireEvent.change(getByLabelText('Last Name'), { target: { value: 'Stark' } });
      });

      await act(async () => {
        fireEvent.click(getByRole('button'));
      });
      expect(mockOnSubmit).toHaveBeenCalled;
    });
  });
});
