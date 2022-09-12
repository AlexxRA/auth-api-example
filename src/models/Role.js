import mongoose from "mongoose";

export const ROLES = ["USER", "ADMIN", "MODERATOR"];

const roleSchema = new mongoose.Schema(
  {
    name: String,
  },
  {
    versionKey: false,
  }
);

export default mongoose.model("Role", roleSchema);
