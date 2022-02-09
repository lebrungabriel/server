import mongoose from 'mongoose'

const memberSchema = mongoose.Schema({
    name: String,
})

const MemberArgo = mongoose.model('MemberArgo', memberSchema)

export default MemberArgo