const mongoose=require('mongoose');

const boxSchema=new mongoose.Schema({
    
    price:{
        type:Number,
        required:[true,"Please enter the price of the box"]
    },
    weight:{
        type:Number,
        required:[true,"Please enter the weight of the box"]
    },
    volume:{
        type:Number,
        required:[true,"Please enter the volume of the box"]
    },
    containerNum:{
        type:String,
        default:""
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})

module.exports=mongoose.model("Box",boxSchema);