const express = require('express');

const router = express.Router();
const zod = require("zod")
const { User, Account } = require("../database")

const jwt = require("jsonwebtoken")
const dotenv = require("dotenv")
dotenv.config(); 
const JWT_SECRET = process.env.JWT_SECRET
console.log(JWT_SECRET)
const { authMiddleware } = require("../middleware")


const signupBody = zod.object({
    username: zod.string().email(),
    firstName: zod.string(),
    lastName: zod.string(),
    password:zod.string()
})


console.log("hello")


router.post("/signup", async (req, res) => {
        console.log("Sign Up Route Starts") 

    const { success }  = signupBody.safeParse(req.body)
    
    if (!success) {
        return res.status(411).json({
            message:"Incorrect inputs"
        })

    }

    const existingUser = await User.findOne({
        username: req.body.username
        
    })


    if (existingUser) {
        return res.status(411).json({
            Message: "User already exists with this username(Email ID)"
        })
    }
    const user = await User.create({
        username: req.body.username, 
        password: req.body.password, 
        firstName: req.body.firstName,
        lastName: req.body.lastName
    })

    const userId = user._id 

    await Account.create({
        userId,
        balance: 1 + Math.random() * 10000
    })
    console.log("Account Balance is created")

    const token = jwt.sign({userId} , JWT_SECRET)

    res.json({
        message: "User Created successfully",
        token:token
    })

            console.log("Sign Up Route Ends") 

})

 
const signinBody = zod.object({
    username: zod.string().email(),
    password : zod.string()
})

router.post("/signin", async (req, res) => {
    
            console.log("Sign In Route Starts") 

        const { success } = signinBody.safeParse(req.body)

        if (!success) {
        return res.status(411).json({
            message:"Incorrect inputs"
        })

        }

    const user = await User.findOne({
        username: req.body.username,
        password: req.body.password

    })
    
    
    if (user) {
        const token = jwt.sign({
            userId: user._id
        }, JWT_SECRET)
        
        res.json({
            "Token":token
        })
        return
    }

    res.status(411).json({
        messages:"Error while logging in"
    })


                console.log("Sign In Route Ends") 

})


//     const updateBody = zod.object({
//            password: zod.string().optional(),
//            firstName: zod.string().optional(),
//            lastName: zod.string().optional()
//       })



// router.put("/", authMiddleware, async (req, res) => { 
//     const { success } = updateBody.safeParse(req.body)

//     if (!success) {
//         res.status(411).json({
//             message:"error while updating information"
//         })
//     }

//     await User.updateOne(req.body, {
//         id: req.userId
//     });
    
//     res.json({
//         message: "updated Successfully"
//     })

// })


router.get("/bulk", async (req, res) => {
    
    const filter = req.query.filter || "";

    const users = await User.find({
        $or:[{
            firstName: {
                "$regex": filter
            }
        }
            , {
                firstName: {
                "$regex": filter
            } 
            }]
    })

    res.json({
        user: users.map(user => ({
            username: user.username,
            firstName: user.firstName, 
            lastName: user.lastName,
            password: user.password,
            _id: user._id
        }))
    })
})

module.exports = router;