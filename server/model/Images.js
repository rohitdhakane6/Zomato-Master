import { Schema, model } from 'mongoose';
const imageSchema = new Schema({
    images: [
      {
        location: { type: String, required: true },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const images = model("images", imageSchema);
export default images;