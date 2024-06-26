import mongoose, { Schema, Document } from "mongoose";

const favouriteSchema = new mongoose.Schema({

    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    cartItem: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'products'
    },
    isDelete: {
        type: Boolean,
        default: false
    }
},
{
versionKey: false,
timestamps: true
});

const favouriteModel =  mongoose.model('favourites', favouriteSchema);
export default favouriteModel