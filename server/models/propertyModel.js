//jshint esversion:6
const mongoose = require("mongoose");

const propertySchema = mongoose.Schema({
  propertyId: {
    type: Number,
    required: "Enter ID",
  },
  propertyName: {
    type: String,
    required: "Property name is required !",
  },
  propertyStatus: {
    type: String,
    required: "Status is required !",
  },
  propertyType: {
    type: String,
    required: "Type is required",
  },
  propertyBhk: {
    type: String,
    required: "BHK is required",
  },
  area: {
    type: String,
    required: "Area is required",
  },
  price: {
    type: Number,
    required: "Price is required",
  },
  location: {
    type: String,
    required: "Location is required",
  },
});

const propertyModel = mongoose.model("Property", propertySchema);
export default propertyModel;
