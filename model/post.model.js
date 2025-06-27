import mongoose, { Schema } from "mongoose";

const statsSchema = new Schema({
  likesCount: {
    type: Number,
    default: 0,
  },
  commentsCount: {
    type: Number,
    default: 0,
  },
  sharesCount: {
    type: Number,
    default: 0,
  },
  viewsCount: {
    type: Number,
    default: 0,
  },
});


const mediaSchema = new Schema({
  type: {
    type: String,
    required: true
  },
  url: String,
  thumbnail: String
});


const postSchema = new Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    content: {
      type: String,
    },
    media: [
      mediaSchema
    ],

    hashtags: [String],
    mentions: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],

    privacy: {
      type: String,
      default: "public",
    },
    isEdited: {
      type: Boolean,
      default: false,
    },

    stats: statsSchema,
  },

  { timestamps: true, collection: "posts" }
);

export const Post = mongoose.model("Post", postSchema);


