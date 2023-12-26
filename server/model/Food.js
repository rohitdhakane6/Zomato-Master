import { Schema, model } from 'mongoose';

const FoodSchema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50,
  },
  category: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50,
  },
  description: {
    type: String,
    maxlength: 255,
  },
  ingredients: [{
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50,
  }],
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  isVegetarian: {
    type: Boolean,
    default: false,
  },
  // Reference to the Images collection
  images: [{
    type: Schema.Types.ObjectId,
    ref: 'Images',
  }],
  restaurant: {
    type: Schema.Types.ObjectId,
    ref: 'Restaurant',
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const Food = model('Food', FoodSchema);

export default Food;
