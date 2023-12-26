import { Schema, model } from 'mongoose';

const UserSchema = new Schema(
    {
        fullName: {
            type: String,
            required: true,
            min: 2,
            max: 50,
        },
        email: {
            type: String,
            required: true,
            max: 50,
            unique: true,
        },
    }
);

const User = model("User", UserSchema);
export default User;