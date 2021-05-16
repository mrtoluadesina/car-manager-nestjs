import { Document } from 'mongoose';

export interface ICar extends Document {
   id: number;
   brand: string;
   color: string;
   model: string;
}