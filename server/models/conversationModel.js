import mongoose from "mongoose";

const conversationSchema = mongoose.Schema(
  {
    participantsId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    messages: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Message",
    },
  },
  { timestamps: true }
);

const conversationModel = mongoose.model("Conversations", conversationSchema);
export default conversationModel;
