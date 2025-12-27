import mongoose, { Schema } from "mongoose";

const WishSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },

    occasion: {
      type: String,
      enum: ["good_morning", "good_night", "festival"],
      required: true,
    },

    festivalName: String,

    receiverName: {
      type: String,
      required: true,
      trim: true,
    },

    language: {
      type: String,
      enum: ["hi", "en", "mr"],
      required: true,
    },

    text: {
      type: String,
      required: true,
    },

    imageUrl: String,
    audioUrl: String,
  },
  { timestamps: true }
);

// indexes (scale ready)
WishSchema.index({ userId: 1, createdAt: -1 });
WishSchema.index({ createdAt: -1 });

export const Wish = mongoose.model("Wish", WishSchema);
