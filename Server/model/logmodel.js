const mongoose = require("mongoose");
const box=require("./boxmodel.js");

// logSchema
const logSchema = new mongoose.Schema({
    containerId: {
        type: String,
        primary: true
    },
    boxes: {
        type: Array,
        default: []
    }, 
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("Log", logSchema);

