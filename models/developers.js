const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create schema for developers
const DeveloperSchema = new Schema({
    github_id: {
        type: String,
        required: true
    },
    avatar_url: {
        type: String,
    },
    name: {
        type: String,
    },
    company: {
        type: String,
    },
    blog: {
        type: String,
    },
    location: {
        type: String,
    },
    email: {
        type: String,
    },
    bio: {
        type: String,
    },
    linkedin_id: {
        type: String,
    },
    codechef_id: {
        type: String,
    },
    hackerrank_id: {
        type: String,
    },
    twitter_id: {
        type: String,
    },
    medium_id: {
        type: String,
    },
    repos: {
        type: Array,
    }
});

const Developer = mongoose.model('developer', DeveloperSchema)

module.exports = Developer;