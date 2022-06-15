const { schema, model, Schema } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const critiqueSchema = new Schema(
    {
        critiqueText: {
            type: String,
            required: true,
            maxlength: 300
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: timestamp => dateFormat(timestamp)
        },
        username: {
            type: String,
            required: true
        }
    }
);

const Critique = model('critique', critiqueSchema);

module.exports = Critique;