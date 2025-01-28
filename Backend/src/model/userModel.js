import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    socketId: {
        type: String,
      },
});
UserSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET,{expiresIn: '24h'});
    return token;
  };
  
  UserSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
  };
  
  UserSchema.methods.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10);
  };
  

const userModel = mongoose.model('User', UserSchema);
export default userModel;