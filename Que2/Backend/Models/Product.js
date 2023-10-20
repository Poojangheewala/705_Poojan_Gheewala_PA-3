const mongoose = require('../config/db');

const ProductSchema = mongoose.Schema({
    productname: String,
    category: String,
    price: Number,
    qty: Number,
    description: String
})

module.exports = mongoose.model('Product', ProductSchema);