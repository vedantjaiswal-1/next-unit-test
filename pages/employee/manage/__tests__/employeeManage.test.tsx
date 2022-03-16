import { render } from '@testing-library/react';
import { ManageEmployee } from '../../../../component/Employee/ManageEmployee';

export {};

describe('Employee Manage Test', () => {
  test('edit button link to "/employee/add" ', async () => {
    const { queryByTestId } = render(<ManageEmployee />);

    const editIcon = await queryByTestId('edit-link');
    expect(editIcon).toHaveBeenCalled

  });
});
