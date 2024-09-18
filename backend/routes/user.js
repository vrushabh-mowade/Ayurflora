import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate';
import authMiddleware from '../middleware.js';
import express from 'express';
import zod from 'zod';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();




const router = express.Router();

const JWT_SECRET = process.env.JWT_SECRET;



const signupBody = zod.object({
    username: zod.string().min(1),
    password: zod.string().min(4),
    firstname: zod.string().min(1),
    lastname: zod.string().min(1),
})

router.post("/signup", async (req, res) => {
    const { success, error } = signupBody.safeParse(req.body);
    if (!success) {
        return res.status(400).json({
            message: "Invalid input",
            errors: error.errors
        });
    }

    const prisma = new PrismaClient().$extends(withAccelerate());

    try {
        const existingUser = await prisma.user.findUnique({
            where: { username: req.body.username }
        });

        if (existingUser) {
            return res.status(400).json({
                message: "Username already taken"
            });
        }

        const user = await prisma.user.create({
            data: {
                username: req.body.username,
                password: req.body.password,
                firstname: req.body.firstname,
                lastname: req.body.lastname
            }
        });

        const token = jwt.sign({ userId: user.id }, JWT_SECRET);

        res.status(201).json({
            message: "User created successfully",
            token: token
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Internal server error"
        });
    } finally {
        await prisma.$disconnect();
    }
});


const signinBody = zod.object({
    username: zod.string(),
    password: zod.string()
})

router.post("/signin", async (req, res) => {
    const { success } = signinBody.safeParse(req.body)
    if (!success) {
        return res.status(411).json({
            message: "Incorrect inputs"
        })
    }
    const prisma = new PrismaClient().$extends(withAccelerate());

    const user = await prisma.user.findUnique({
        where: {
            username: req.body.username,
            password: req.body.password
        }
    });

    if (user) {
        const token = jwt.sign({
            userId: user._id
        }, JWT_SECRET);

        res.json({
            token: token
        })
        return;
    }


    res.status(411).json({
        message: "Error while logging in"
    })
})

router.get('/bookmarks')


// other auth routes

const updateBody = zod.object({
    password: zod.string().optional(),
    firstname: zod.string().optional(),
    lastname: zod.string().optional(),
})

// router.put("/", authMiddleware, async (req, res) => {
//     const { success } = updateBody.safeParse(req.body)
//     if (!success) {
//         res.status(411).json({
//             message: "Error while updating information"
//         })
//     }

//         const prisma = new PrismaClient().$extends(withAccelerate());

// 		await prisma.user.update({ _id: req.userId }, req.body);

//     res.json({
//         message: "Updated successfully"
//     })
// })

// router.get("/bulk", async (req, res) => {
//     const filter = req.query.filter || "";

//     const users = await User.find({
//         $or: [{
//             firstName: {
//                 "$regex": filter
//             }
//         }, {
//             lastName: {
//                 "$regex": filter
//             }
//         }]
//     })

//     res.json({
//         user: users.map(user => ({
//             username: user.username,
//             firstName: user.firstName,
//             lastName: user.lastName,
//             _id: user._id
//         }))
//     })
// })

export default router;