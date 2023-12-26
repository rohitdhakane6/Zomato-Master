import { Schema, model } from "mongoose";

const OrderSchema = new Schema(
  {
    customer: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    items: [
      {
        type: Schema.Types.ObjectId,
        ref: "Food",
      },
    ],
    paymentsdetail: {
      totalAmount: { type: Number, required: true, default: 0 },
      discount: { type: Number, default: 0 },
      deliveryCharges: { type: Number, default: 0 },
    },
    deliveryAddress: {
      street: { type: String },
      city: { type: String },
      zipCode: { type: String },
    },
    status: {
      type: String,
      enum: ["Pending", "Confirmed", "Delivered", "Cancelled"],
      default: "Pending",
    },
  },
  {
    timestamps: true,
  }
);

const Order = model("Order", OrderSchema);

export default Order;
