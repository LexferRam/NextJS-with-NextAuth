import { connectDB } from "@/libs/mongodb"
import User from "@/models/user"
import { NextResponse } from "next/server"


export async function GET() {

    try {
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