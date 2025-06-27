import mongoose, { Schema } from "mongoose";


const userSchmea = new Schema({

    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },

    passwordHash: {
        type: String,
        required: true,
    },

    fullName: String,
    bio: String,

    profilePicture: {
        type: String,
        validate: {
            validator: (v) => /^https?:\/\/.+\.(jpg|jpeg|png|webp|gif)$/.test(v),
            message: 'Invalid image URL',
        },
    },

    isVerified: {
        type: Boolean,
        default: false,
    },

    lastActive: Date,

    stats: {
        postCount: {
            type: Number,
            default: 0
        },
        followersCount: {
            type: Number,
            default: 0,
        },
        followingCount: {
            type: Number,
            default: 0,
        },
    }


}, { timestamps: true, collection: "users" })

export const User = mongoose.model('User', userSchmea);

