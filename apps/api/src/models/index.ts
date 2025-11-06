// src/models/index.ts
import { Schema, model, Document } from "mongoose";

export interface IDoctors extends Document {
  name: string;
  description: string;
  qualification: string;
}

const DoctorsSchema = new Schema<IDoctors>(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    qualification: { type: String, required: true },
  },
  { collection: "doctors" }
);

export const DoctorsModel = model<IDoctors>("Doctors", DoctorsSchema);
