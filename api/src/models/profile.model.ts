import mongoose from "mongoose";

//create a schema for the profile model
/**
 * profile schema - {   name:string,   email:string,   photo:Object  } */
const profile = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    required: true,
  },
  photo: {
    type: Object,
    required: true,
  },
});

const Profile = mongoose.model("Profile", profile);
export default Profile;
