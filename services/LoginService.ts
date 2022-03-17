import axios from 'axios';
import { apiBaseUrl } from './EmployeeService';

export default class LoginService {
  static create = (user: any) => {
    return axios.post(`${apiBaseUrl}/login/`, user).then((response) => response.data);
  };
}
