const { Schema, model, Types } = require("mongoose");
// const { DOCUMENT_NAME } = require("./contain");

// const COLLECTION_NAME = "tokens";

const tokenSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "users",
    },
    publicKey: {
      type: String,
      required: true,
    },
    refreshToken: {
      type: Array,
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("tokens", tokenSchema);
