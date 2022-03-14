import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema(
  {
    first_name: {
      type: String,
      required: true
    },
    last_name: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

export default mongoose.models.Employee || mongoose.model('Employee', employeeSchema);
