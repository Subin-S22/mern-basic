import mongoose from "mongoose";

//create a schema for the profile model
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

const Profile = mongoose.model("profile", profile);
export default Profile;
