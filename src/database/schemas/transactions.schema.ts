import mongoose from 'mongoose';

import { CategorySchema } from './category.shema';

const TransactionSchema = new mongoose.Schema(
  {
    title: String,
    amount: Number,
    type: String,
    date: Date,
    category: CategorySchema,
  },
  { versionKey: false },
);

export const TransactionModel = mongoose.model(
  'transaction',
  TransactionSchema,
);
