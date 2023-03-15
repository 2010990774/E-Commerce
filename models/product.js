const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    img: {
        type: String,
        trim: true,
        default: 'https://cdn-icons-png.flaticon.com/512/96/96455.png'

    },
    price: {
        type: Number,
        min: 0,
        default: null,
        required: true
    },
    desc: {
        type: String,
        trim: true
    },
    reviews: [
        {
            // VERY IMPORTANT 
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Review'
        }
    ]
})
let Product = mongoose.model('Product', productSchema);
module.exports = Product;