// src/modules/user/user.model.ts
import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },

        phone: {
            type: String,
            unique: true,
            sparse: true, // allow null for guest users
        },

        preferredLanguage: {
            type: String,
            enum: ["hi", "en", "mr"],
            default: "hi",
        },

        isGuest: {
            type: Boolean,
            default: true,
        },

        dailyUsageCount: {
            type: Number,
            default: 0,
        },

        lastUsageDate: {
            type: String, // YYYY-MM-DD
        },

    },
    { timestamps: true }
);

// Indexes (VERY IMPORTANT)
UserSchema.index({ phone: 1 });
UserSchema.index({ createdAt: -1 });

export const User = mongoose.model("User", UserSchema);
