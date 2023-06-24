const {Schema, model} = require('mongoose')
const dayjs = require('dayjs')

const reactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
    },
    reactionBody: {
        type: String,
        required: true,
        maxlength: 280,
    },
    username: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (createdAtVal) => dayjs.unix(createdAtVal),
    },
},{
    toJSON: {
        virtuals: true,
    },
    id: false,
})

module.exports = reactionSchema;