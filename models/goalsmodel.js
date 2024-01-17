const mongoose = require('mongoose')
const Schema = mongoose.Schema ;

const goalSchema = new Schema ({
    title:{
        type: String,
        required: true,
        minLenth: 7,
        unique: true,
    },
    description: {
      type: String,
      required: true,


    },
    progress: {
        type:  Number,
        required: true,
        default: 0,
        min: 0,
        max: 100,
    }
    //tIMEstaps   When it was created and when it wAS UPDATED
}, {timestamps: true})



//model reach
module.exports = mongoose.model('Goal', goalSchema)