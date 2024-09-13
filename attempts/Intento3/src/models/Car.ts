import { Schema, model, Document } from 'mongoose';

export interface ICar {
  make: string;
  model: string;
  year: number;
  price: number;
  imageUrl: string;
}

const CarSchema: Schema = new Schema({
  make: { type: String, required: true },
  model: { type: String, required: true },
  year: { type: Number, required: true },
  price: { type: Number, required: true },
  imageUrl: { type: String, required: true },
});

export default model<ICar & Document>('Car', CarSchema);
