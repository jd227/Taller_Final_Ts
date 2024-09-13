import { Schema, model } from 'mongoose';

const carSchema = new Schema({
  brand: { type: String, required: true },
  model: { type: String, required: true },
  year: { type: Number, required: true },
  owner: { type: Schema.Types.ObjectId, ref: 'User' } // Relación con el modelo de usuario
});

export const Car = model('Car', carSchema);
