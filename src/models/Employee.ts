import mongoose, { Schema, Document } from 'mongoose';

export interface IEmployee extends Document {
  name: string;
  avatarUrl: string;
  designation: string;
  department: string;
  status: 'Active' | 'Inactive' | 'Resigned';
  email: string;
}

const EmployeeSchema: Schema = new Schema({
  name: { type: String, required: true },
  avatarUrl: { type: String, required: true },
  designation: { type: String, required: true },
  department: { type: String, required: true },
  status: {
    type: String,
    enum: ['Active', 'Inactive', 'Resigned'],
    required: true,
  },
  email: { type: String, required: true, unique: true },
});

// If the model is already defined, use it. Otherwise, create it.
// This is necessary for Next.js hot-reloading.
export default mongoose.models.Employee || mongoose.model<IEmployee>('Employee', EmployeeSchema);
