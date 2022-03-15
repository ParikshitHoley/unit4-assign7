const mongoose = require("mongoose");

const batchSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Batch = mongoose.model("batch", batchSchema);

module.exports = Batch;
