import mongoose from 'mongoose'
import MemberArgo from "../models/memberArgo.js"

export const getMembers = async (req, res) => {
    try {
        const memberArgo = await MemberArgo.find()

        res.status(200).json(memberArgo)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const createMember = async (req, res) => {
    const member = req.body

    const newMember = new MemberArgo(member)
    try {
        await newMember.save()

        res.status(200).json(newMember)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

export const deleteMember = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No member with that ID')

    await MemberArgo.findByIdAndRemove(id)

    res.json({ message: 'Member deleted successfully' })
}