import courseModel from "../models/Course.js";
export const handleCreateCourse = async (req, res) => {
  try {
    const { name, year } = req.body;
    if (!name || !year) {
      return res.status(400).send({
        status: false,
        message: "Please fill all the fields",
      });
    }
    let courseFound = await courseModel.findOne({
      name,
      year,
    });
    if (courseFound) {
      return res.status(400).send({
        status: false,
        message: "Course already exists",
      });
    }

    const newCourse = await courseModel.create({
      name,
      year,
      status: "active",
      students: [],
    });
    res.status(200).send({
      status: true,
      message: "Course created successfully",
      data: newCourse,
    });
  } catch (err) {
    console.log(err, "Course not created");
    res.status(500).send({
      status: false,
      error: err,
    });
  }
};

export const handleEditCourse = async (req, res) => {
  try {
    const { name, year, status, courseId } = req.body;

    // Validate request body
    if (!courseId) {
      return res.status(400).send({
        status: false,
        message: "Please provide a course ID",
      });
    }

    if (!name || !year || !status) {
      return res.status(400).send({
        status: false,
        message: "Please provide all required fields: name, year, and status",
      });
    }

    // Validate status value
    if (!["active", "inactive"].includes(status)) {
      return res.status(400).send({
        status: false,
        message: "Invalid status. Allowed values are 'active' or 'inactive'",
      });
    }

    // Find and update the course
    const updatedCourse = await courseModel.findByIdAndUpdate(
      courseId,
      {
        name,
        year,
        status,
      },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedCourse) {
      return res.status(404).send({
        status: false,
        message: "Course not found",
      });
    }

    res.status(200).send({
      status: true,
      message: "Course updated successfully",
      data: updatedCourse,
    });
  } catch (err) {
    console.error("Error updating course:", err); // Optional: Add logging
    res.status(500).send({
      status: false,
      message: "An error occurred while updating the course",
      error: err.message,
    });
  }
};

export const handleDeleteCourse = async (req, res) => {
  try {
    const courseId = req.params.id;
    let courseFound = await courseModel.findOne({
      _id: courseId,
    });
    console.log(courseFound);
    if (!courseFound) {
      return res.status(400).send({
        status: false,
        message: "Invalid course id",
      });
    }
    const deletedCourse = await courseModel.findByIdAndDelete(req.params.id);
    res.status(200).send({
      status: true,
      data: deletedCourse,
      message: "Course deleted successfully",
    });
  } catch (err) {
    res.status(500).send({
      status: false,
      error: err,
    });
  }
};

export const handleGetAllCourses = async (req, res) => {
  try {
    const limit = parseInt(req.query.limit, 10) || 10;
    const page = parseInt(req.query.page, 10) || 1;
    const filter = req.query.filter ? { status: req.query.filter } : {};
    const courses = await courseModel.aggregate([
      { $match: filter },
      { $skip: (page - 1) * limit },
      { $limit: limit },
    ]);

    const totalCourses = await courseModel.countDocuments(filter);

    res.status(200).send({
      status: true,
      data: {
        totalCount: totalCourses,
        courses: courses,
      },
    });
  } catch (err) {
    console.error(err, "get All course error");
    res.status(500).send({
      status: false,
      error: err.message,
    });
  }
};
