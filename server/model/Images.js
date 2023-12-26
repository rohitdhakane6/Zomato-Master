import { Schema, model } from 'mongoose';
const imageSchema = new Schema({
    url:[ {
        type: String,
        required: true,
      }],
    });

const imagemodel = model("images", imageSchema);
export default imagemodel;
