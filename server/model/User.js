import mongoose from "mongoose";
import bcrypt from "bcrypt";
import Jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    maxlength: 255,
  },
  phone: {
    type: String,
    // required: true,
    unique: true,
  },
  password: {
    type: String,
    // required: true, 
    minlength: 5,
  },
  address: {
    street: {
      type: String,
      maxlength: 255,
    },
    city: {
      type: String,
      maxlength: 50,
    },
    state: {
      type: String,
      maxlength: 50,
    },
    zipCode: {
      type: String,
      maxlength: 20,
    },
    country: {
      type: String,
      maxlength: 50,
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: null,
  },
});

// Middleware to update `updatedAt` field before saving
userSchema.pre("save", function (next) {
  this.updatedAt = new Date();
  next();
});

// Method to generate JWT token for the user
userSchema.methods.genratjwttoken = function () {
  return Jwt.sign({ User: this._id.toString() }, "your-secret-key");
};

// Static method to find a user by email and phone
userSchema.statics.findByEmailAndPhone = async function (email, phone) {
  const checkUserByEmail = await this.findOne({ email });
  const checkUserByPhone = await this.findOne({ phone });

  if (checkUserByEmail || checkUserByPhone) {
    throw new Error("User already exists.");
  }
  return false;
};

// Static method to find a user by email and password
userSchema.statics.findByEmailAndPassword = async function (email, password) {
  const user = await this.findOne({ email });

  if (!user) {
    throw new Error("User does not exist.");
  }

  // Compare Passwords
  const doesPasswordMatch = await bcrypt.compare(password, user.password);
  if (!doesPasswordMatch) {
    throw new Error("Invalid Password!");
  }

  return user;
};

// Middleware to hash password before saving
userSchema.pre("save", function (next) {
  if (!this.isModified("password")) return next();
  bcrypt.genSalt(8, (err, salt) => {
    if (err) return next(err);
    bcrypt.hash(this.password, salt, (err, hash) => {
      if (err) return next(err);
      this.password = hash;
      return next();
    });
  });
});

const User = mongoose.model("User", userSchema);

export default User;
