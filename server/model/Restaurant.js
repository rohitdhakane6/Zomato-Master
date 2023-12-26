import { Schema, model } from "mongoose";

const RestaurantSchema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50,
  },
  location: {
    type: String,
    required: true,
    maxlength: 255,
  },
  cuisine: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50,
  },
  rating: {
    type: Number,
    default: 0,
    min: 0,
    max: 5,
  },
  openingHours: {
    type: String,
  },
  contact: {
    phone: {
      type: String,
      minlength: 10,
      maxlength: 15,
    },
    email: {
      type: String,
      maxlength: 255,
    },
  },
  address: {
    street: {
      type: String,
    },
    city: {
      type: String,
    },
    state: {
      type: String,
      maxlength: 50,
    },
    zipCode: {
      type: String,
      maxlength: 10,
    },
  },
  menu: {
    type: Schema.Types.ObjectId,
    ref: "Menu",
  },
  photos: [
    {
      type: Schema.Types.ObjectId,
      ref: "Photo",
    },
  ],
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
  // Add other fields relevant to your Restaurant collection
});

const Restaurant = model("Restaurant", RestaurantSchema);

export default Restaurant;
