const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    rollId: { type: Number, required: true },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    batchId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "batch",
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Student = mongoose.model("student", studentSchema);

module.exports = Student;
