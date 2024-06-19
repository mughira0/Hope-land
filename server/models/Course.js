import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate";
import { studentSchema } from "./studentModel.js";

const courseSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    year: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
      enum: ["active", "inactive"],
    },
    students: [studentSchema],
  },
  { timestamps: true }
);
courseSchema.plugin(mongoosePaginate);
const courseModel = mongoose.model("Course", courseSchema);
export default courseModel;
