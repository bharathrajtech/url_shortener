import mongoose from 'mongoose';
// import shortId from 'shortid';

const shortUrlSchema = new mongoose.Schema({
    full:{
        type: String,
        required: true,
    },
    short:{
        type: String,
        required: true,
        default: () => Math.random().toString(36).substr(2, 5),
    },
    clicks: {
        type: Number,
        required: true,
        default:0,
    },
});

export default mongoose.model('ShortUrl', shortUrlSchema);


