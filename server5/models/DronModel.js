import mongoose from "mongoose";
const Schema = mongoose.Schema;

const dronSchema = new Schema(
  {
    id: { type: Number },
    name: { type: String },
    type: { type: String },
    content: { type: String },
    price: { type: Number },
    content: { type: String },
    title: { type: String },
    content: { type: String },
    image: { type: String, maxlength: 800 },
    imageUrl: { type: String },
    content: { type: String },
    quantity: { type: Number },
    description: { type: String },
  },
  { collection: "drons" }
);

export default mongoose.model("DronModel", dronSchema);
