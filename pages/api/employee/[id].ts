import nextConnect, { NextHandler } from 'next-connect';
const connectDb = require('../../../utils/connectDb');
import { NextApiRequest, NextApiResponse } from 'next';
import Employee from '../../../models/Employee';

connectDb();

const handler = nextConnect();

handler
  .put(async (req: NextApiRequest, res: NextApiResponse, next: NextHandler) => {
    try {
      const employee = await Employee.findOne({ _id: req.query.id });
      employee.first_name = req.body.first_name;
      employee.last_name = req.body.last_name;

      await employee.save();
      res.send(employee);
    } catch (error) {
      res.json({ message: 'Unable to update' });
    }
  })
  .delete(async (req: NextApiRequest, res: NextApiResponse, next: NextHandler) => {
    try {
      await Employee.findOneAndDelete({ _id: req.query.id });
      res.json({ message: 'Employee Deleted' });
    } catch (error) {
      res.json({ message: 'Unable to delete' });
    }
  });

export default handler;
