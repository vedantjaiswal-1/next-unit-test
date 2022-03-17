import axios from 'axios';
export const apiBaseUrl = 'http://localhost:3000/api';

export const isValidId = (_id: string): boolean => {
  if (!_id) {
    return false;
  }

  _id = _id.toString();
  return _id.length !== 0;
};

export default class EmployeeService {
  static list = () => {
    return axios.get(`${apiBaseUrl}/employee/`).then((response) => response.data);
  };

  static fetch = (id: any) => {
    return axios.get(`${apiBaseUrl}/employee/${id}`, id).then((response) => response.data);
  };

  static update = (id: any) => {
    return axios.put(`${apiBaseUrl}/employee/${id}`, id).then((response) => response.data);
  };

  static delete = (id: any) => {
    return axios.delete(`${apiBaseUrl}/employee/${id}`).then((response) => response.data);
  };

  static save = (id: any, employee: any) => {
    if (id) {
      return axios.put(`${apiBaseUrl}/employee/${id}/`, employee).then((response) => response.data);
    } else {
      return axios.post(`${apiBaseUrl}/employee/`, employee).then((response) => response.data);
    }
  };
}
