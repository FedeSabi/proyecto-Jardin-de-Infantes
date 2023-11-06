import mongoose from 'mongoose'
const userSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true          
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique:true
    },
    password: {
        type: String,
        required: true,
    }, // se agrego administrador
    isAdmin: {
        type: Boolean,
        default: false
    },
},{
    timestamps: true

})

export default mongoose.model('User', userSchema)