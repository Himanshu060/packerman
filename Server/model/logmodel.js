const mongoose = require("mongoose");
const box=require("./boxmodel.js");

// logSchema
const logSchema = new mongoose.Schema({
    containerId: {
        type: String,
        primary: true
        // required: [true, "Please enter the containerId"]
    },
    boxes: {
        type: Array,
        default: []
        // required: [true, "Please enter the boxlog"]
    }, 
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("Log", logSchema);

