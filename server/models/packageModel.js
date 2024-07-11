import mongoose from "mongoose";

const packageSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    permission: {
      type: [String],
      required: true,
    },
    type: {
      type: String,
      required: true,
      unique: true,
    },

    price: {
      type: Number,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    recurringType: {
      type: String,
      required: true,
      enum: ["none", "monthly", "yearly"],
    },
  },
  { timestamps: true }
);

const packageModel = mongoose.model("Package", packageSchema);
export default packageModel;
