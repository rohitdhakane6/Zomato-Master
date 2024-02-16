import { Schema, model } from "mongoose";

const RestaurantSchema = new Schema({
    name: { type: String, required: true },
    city: { type: String, required: true },
    address: { type: String, required: true },
    mapLocation: { type: String, required: true },
    cuisine: [String],
    restaurantTimings: String,
    contactNumber: Number,
    website: String,
    popularDishes: [String],
    averageCost: Number,
    amenties: [String],
    menuImages: {
      type: Schema.Types.ObjectId,
      ref: "Images",
    },
    menu: {
      type: Schema.Types.ObjectId,
      ref: "Menus",
    },
    reviews: [{ type: Schema.Types.ObjectId, ref: "Reviews" }],
    photos: { type: Schema.Types.ObjectId, ref: "Images" },
  },
  {
    timestamps: true,
  }
);

const Restaurant = model("Restaurant", RestaurantSchema);

export default Restaurant;