const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate')

const ProdutcSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
    url: {
        type: String,
        require: true,
    },
    createdAt:{
        type: Date,
        default: Date.now,
    },
});

ProdutcSchema.plugin(mongoosePaginate);
mongoose.model('Product', ProdutcSchema);