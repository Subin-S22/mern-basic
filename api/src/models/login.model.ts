import mongoose from "mongoose";
import { emailValidate } from "../validations/login";

/**
 * Login body schema - { email:string, password:string }
 */
const Login = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    validate: [emailValidate, "Please fill the valid email address"],
  },
  password: {
    type: String,
    required: true,
  },
});

const LoginModel = mongoose.model("LoginModel", Login);

export default LoginModel;
