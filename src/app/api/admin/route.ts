import { connectDB } from "@/libs/mongodb"
import User from "@/models/user"
import { getToken } from "next-auth/jwt"
import { NextResponse } from "next/server"

const secret = process.env.NEXTAUTH_SECRET

export async function GET(req) {


    try {

        const token = await getToken({ req, secret })
        console.log("JSON Web Token", token)

        if(token?.email !== 'lexferramirez@gmail.com') return NextResponse.json([])

        await connectDB()
        const users = await User.find()
        return NextResponse.json(users)

    } catch (error) {
        console.log(error)
        if (error instanceof Error) {
            return NextResponse.json({
                message: error.message
            }, {
                status: 400
            })
        }
    }
}