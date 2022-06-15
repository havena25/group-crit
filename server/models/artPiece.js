const { Schema, model } = require('mongoose');
const commentSchema = require('./Comment');
const dateFormat = require('../utils/dateFormat');

const artSchema = new Schema({
    artTitle: {
        type: String,
        required: 'Your art piece or series should have a title',
        minlength: 1,
        maxlength: 120,
        default: 'Untitled'
    },
    artDescription: {
        type: String,
        required: 'Please describe your art piece or series',
        minlength: 1,
        maxlength: 500
    },
    artStartDate: {
        type: Date,
        required: true
    },
    artStatus: {
        type: String,
        required: true,
        default: 'WIP'
    },
    artistName: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: timestamp => dateFormat(timestamp)
    },
    comments: [commentSchema]
},
{
    toJSON: {
        getters: true
    }
});

artSchema.virtual('commentCount').get(function() {
    return this.comments.length;
})


const Art = model('Art', artSchema);