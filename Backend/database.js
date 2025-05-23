
const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config(); 

mongoose.connect(process.env.DATABASE_URL)
.then(() => console.log('MongoDB connected ✅'))
.catch(err => console.error('MongoDB connection error ❌', err));

const UserSchema = new mongoose.Schema({
    username: {
        type:String,
        required: true,
        unique: true, 
        trim: true,
        lowercase: true,
        minLength: 3,
       maxLength:30
        
    } ,
    password: {
        type:String,
        required: true, 
        minLength:6
    },
    
    firstName: {
        type: String,
        required: true,
        trim: true,
       maxLength:30
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
       maxLength:30
    }
});

const User = mongoose.model('User', UserSchema);


const accountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User", 
        required:true
    }, 
    balance: {
        type: Number,
        required: true
    }
})

const Account = mongoose.model('Account' , accountSchema)

module.exports = {
    User,
    Account
}
