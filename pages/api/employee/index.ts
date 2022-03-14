import nextConnect, { NextHandler } from 'next-connect';
const connectDb = require('../../../utils/connectDb');
import { NextApiRequest, NextApiResponse } from 'next';
import Employee from '../../../models/Employee';

connectDb();

const handler = nextConnect();

handler
  .get(async (req: NextApiRequest, res: NextApiResponse, next: NextHandler) => {
    try {
      const employees = await Employee.find({});
      res.status(200).json(employees);
    } catch (error) {
      res.status(500).json({ msg: 'Server Error' });
    }
  })

  .post(async (req: NextApiRequest, res: NextApiResponse, next: NextHandler) => {
    try {
      const employee = new Employee(req.body);
      await employee.save();
      res.status(201).json(employee);

      
    } catch (error) {
      console.log(error);
      res.status(500).json({ msg: 'Server Error' });
    }
  });

export default handler;
