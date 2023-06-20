const mongoose = require("mongoose")

const MovieSchema = new mongoose.Schema({
    title: {
        type:String,
        require:true
    },
    year: {
        type: Number,
        require:true
    },
    description:{
        type: String,
        require:true
    }
})

module.exports = mongoose.model("Movie", MovieSchema)