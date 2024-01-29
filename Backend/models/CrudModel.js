const mongoose = require("mongoose")
const { Schema } = mongoose;

const crudSchema = new Schema({
    title: {
        type: String,
        required: true
    }, 
    author: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    // comments: [{ body: String, date: Date }],
    // date: { type: Date, default: Date.now },
    // hidden: Boolean,
    // meta: {
    //     votes: Number,
    //     favs: Number
    // }
});

module.exports = mongoose.model('Crud', crudSchema);