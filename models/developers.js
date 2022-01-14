const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create schema for developers
const DeveloperSchema = new Schema({
    id: {
        type: Number,
        // required: true
    },
    avatar_url: {
        type: String,
        // required: true
    },
    name: {
        type: String,
        // required: true
    },
    company: {
        type: String,
        // required: false
    },
    blog: {
        type: String,
        // required: false
    },
    location: {
        type: String,
        // required: false
    },
    email: {
        type: String,
        // required: false
    },
    bio: {
        type: String,
        // required: false
    },
    github_id: {
        type: String,
        // required: true
    },
    linkedin_id: {
        type: String,
        // required: false
    },
    codechef_id: {
        type: String,
        // required: false
    },
    hackerrank_id: {
        type: String,
        // required: false
    },
    twitter_id: {
        type: String,
        // required: false
    },
    medium_id: {
        type: String,
        // required: false
    },
    repos: {
        type: Array,
        // required: false
    }
});

const Developer = mongoose.model('developer', DeveloperSchema)

module.exports = Developer;