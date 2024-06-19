import mongoose from "mongoose";

const handleMongoDbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(`mongoDB connected at MONGO_URL:${process.env.MONGO_URL}`);
  } catch (err) {
    console.log(`Error at mongoDB connection function error: ${err}`);
  }
};
export default handleMongoDbConnection;
