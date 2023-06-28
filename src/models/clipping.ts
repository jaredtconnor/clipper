import { Schema, model, Document } from 'mongoose';

// Define the schema for the Clipping model
interface ClippingModel extends Document {
  title: string;
  content: string;
  url: string;
}

const clippingSchema = new Schema<ClippingModel>({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
});

// Create the Clipping model using the schema
export const Clipping = model<ClippingModel>('Clipping', clippingSchema);
