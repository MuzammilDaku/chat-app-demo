//@ts-ignore
import bcrypt from "bcrypt";
import mongoConnect from "@/config/db";
import User from "@/config/models/Users";
import { NextRequest, NextResponse } from "next/server";
// @ts-ignore
import * as jwt from 'jsonwebtoken'

export async function POST(req:NextRequest){
    await mongoConnect()
    let success = false; 
    try {
        const json = await req.json();

        console.log()
        const {emailOrUsername,password} = json;

        const findUser = await User.findOne({
            $or:[
                {email:emailOrUsername},
                {username:emailOrUsername}
            ]
        })

        if(!findUser) {
            return NextResponse.json({success,error:"Invalid Username or Email"})
        }

        const pass = await bcrypt.compare(password,findUser.password)

        if(!pass) {
            return NextResponse.json({success,error:"Invalid Password!"})
        }

        const token = await jwt.sign({_id:findUser._id},process.env.JWT_SECRET_KEY)

        success = true; 

        return NextResponse.json({success,token})

    } catch (error) {
        console.log(error)
        return NextResponse.json({success,error:"Internal Server Error"})
    }
  

}