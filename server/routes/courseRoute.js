import express from "express";
import {
  handleCreateCourse,
  handleDeleteCourse,
  handleEditCourse,
  handleGetAllCourses,
} from "../controllers/courseController.js";

const courseRouter = express.Router();
courseRouter.get("/course/all", handleGetAllCourses);
courseRouter.post("/course/create", handleCreateCourse);
courseRouter.patch("/course/create", handleEditCourse);
courseRouter.delete("/course/:id", handleDeleteCourse);
export default courseRouter;
