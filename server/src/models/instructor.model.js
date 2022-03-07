const mongoose = require("mongoose");

const instructorSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    info: {
        types: String,
        required: true
    },
    courses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',
        required: true
    }]
}, {
    versionKey: false,
    timestamps: true
});

const Instructor = mongoose.model("Instructor", instructorSchema);
module.exports = Instructor;