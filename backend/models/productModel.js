const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required:[true , "please enter product name"],
        trim: true
    },
    description: {
        type: String,
        required:[true,"please enter product description"]
    },
    price: {
        type: Number,
        required:[true , "please enter product price"],
        maxLength: [8 , "price cant exceed 8 charaters"]
    },
    rating:{
        type: Number,
        default:0
    },
    images:{
        public_id:{
            type: String,
            required: true
        },
        url:{
            type: String,
            required: true
        }
    },
    category:{
        type: String,
        required: [true , "please enter category of the product"]
    },
    Stock:{
        type: Number,
        required: [true,"please enter the number of prodcuts in your stock"],
        maxLength:[4, "stock cant exceed 4 digits"],
        default:1
    },
    numOfReviews:{
        type: Number,
        default:0
    },
    reviews:[{
        name:{
            type: String,
            required: true
        },
        rating:{
            type: Number,
            default:0
        },
        comment:{
            type: String,
            required: true
        }
    }],
    createdAt:{
        type: Date,
        default: Date.now
    }
})




module.exports = mongoose.model("Product", productSchema);