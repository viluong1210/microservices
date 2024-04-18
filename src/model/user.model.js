// const { Schema, model, Types } = require("mongoose");
// const { DOCUMENT_NAME } = require("./contain");

// const COLLECTION_NAME = "shop";

// const shopsSchema = new Schema(
//   {
//     name: {
//       type: String,
//       trim: true,
//       maxLength: 150,
//     },
//     email: {
//       type: String,
//       unique: true,
//       trim: true,
//     },
//     password: {
//       type: String,
//       trim: true,
//     },
//     status: {
//       type: String,
//       enum: ["active", "inactive"],
//       default: "active",
//     },
//     roles: {
//       type: Array,
//       default: [],
//     },
//   },
//   {
//     timestamps: true,
//     collation: COLLECTION_NAME,
//   }
// );

// module.exports = model(DOCUMENT_NAME, shopsSchema);
