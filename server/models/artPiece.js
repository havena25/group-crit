const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const ArtSchema = new Schema(
  {
    artTitle: {
      type: String,
      required: "Your art piece or series should have a title",
      minlength: 1,
      maxlength: 120,
      default: "Untitled",
    },
    artSummary: {
      type: String,
      required: "This art should have a summary!",
      minlength: 1,
      maxlength: 500,
    },
    artDescription: {
      type: String,
      required: "Please describe your art piece or series",
      minlength: 1,
      maxlength: 500,
    },
    artStartDate: {
      type: Date,
      required: true,
    },
    artStatus: {
      type: String,
      required: true,
      default: "WIP",
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp),
    },
    critiques: [
      {
        type: Schema.Types.ObjectId,
        ref: "critique",
      },
    ],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

ArtSchema.virtual("critiqueCount").get(function () {
  return this.critique.length;
});

const Art = model("Art", ArtSchema);

module.exports = Art;
