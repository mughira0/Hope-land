import mongoose from "mongoose";

const studentSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
      enum: ["male", "female"],
    },
    contact: {
      type: Number,
      required: true,
    },
    address: {
      type: String,
    },
  },
  { timestamps: true }
);
export { studentSchema };
const studentModel = mongoose.model("Student", studentSchema);
export default studentModel;
