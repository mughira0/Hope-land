import packageModel from "../models/packageModel.js";
export const handleAddPackage = async (req, res) => {
  try {
    const { title, description, recurringType, price, permissions, type } =
      req.body;
    const body = req.body;
    console.log(body);
    for (const key in body) {
      if (key == "permissions" || key == "price") {
        continue;
      }
      if (!body[key]) {
        res.status(400).send({
          status: false,
          message: `Please Fill the ${key} field`,
        });
        return;
      }
    }

    const find = await packageModel.findOne({ type });
    if (find) {
      return res.status(400).send({
        status: false,
        message: `${type} Package already existed`,
      });
    }
    const newPackage = await packageModel.create({
      title,
      description,
      recurringType,
      price,
      permissions,
      type,
    });
    res.status(201).send({
      status: true,
      message: `Package created Successfully`,
      package: newPackage,
    });
  } catch (err) {
    console.log("Package error ;", err);
    res.status(500).send({
      status: false,
      error: err,
    });
  }
};

export const handleEditPackage = async (req, res) => {
  try {
    const { title, description, packageId } = req.body;
    const packageFound = await packageModel.findOne({ _id: packageId });

    if (!packageFound) {
      return res.status(400).send({
        status: false,
        message: "Invalid Package Id",
      });
    }

    const updatedPackage = await packageModel.findOneAndUpdate(
      { _id: packageId },
      {
        title,
        description,
      },
      { new: true }
    );
    res.status(200).send({
      status: true,
      message: "Package Updated Successfully",
      package: updatedPackage,
    });
  } catch (err) {
    res.status(400).send({
      status: false,
      error: err,
    });
  }
};

export const handleGetPackages = async (req, res) => {
  try {
    const packages = await packageModel.find();
    res.status(200).send({
      status: true,
      packages,
    });
  } catch (err) {
    res.status(400).send({
      status: false,
      error: err,
    });
  }
};
export const getPackageById = async (req, res) => {
  try {
    const { packageId } = req.params;
    const packageFound = await packageModel.findOne({ _id: packageId });
    if (!packageFound) {
      return res.status(400).send({
        status: false,
        message: "Invalid Package Id",
      });
    }
    res.status(200).send({
      status: true,
      package: packageFound,
    });
  } catch (err) {
    res.status(400).send({
      status: false,
      error: err,
    });
  }
};
export const deletePackage = async (req, res) => {
  try {
    const { packageId } = req.params;
    const packageFound = await packageModel.findOneAndDelete({
      _id: packageId,
    });
    if (!packageFound) {
      return res.status(400).send({
        status: false,
        message: "Invalid Package Id",
      });
    }
    res.status(200).send({
      status: true,
      message: "Package Deleted Successfully",
    });
  } catch (err) {
    res.status(400).send({
      status: false,
      error: err,
    });
  }
};
