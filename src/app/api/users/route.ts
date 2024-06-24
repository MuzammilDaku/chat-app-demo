//@ts-ignore
import bcrypt from "bcrypt";
import mongoConnect from "@/config/db";
import User from "@/config/models/Users";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
   await mongoConnect();

   let success = false;

   try {
      const users = await User.find();
      success = true;
      return NextResponse.json({ success, users });
   } catch (error) {
      return NextResponse.json({ success, error: "Internal Server Error" });
   }
}

export async function POST(req: NextRequest,res:NextResponse) {
   await mongoConnect();
   let success = false;
   try {

      const { password, username, email,name } = await req.json();

      const usernameCheck = await User.findOne({ username });
      if (usernameCheck) {
         return NextResponse.json({ success, error: "Username already exists!" });
      }

      const emailCheck = await User.findOne({ email });
      if (emailCheck) {
         return NextResponse.json({ success, error: "Email already exists!" });
      }

      const hashPass = await bcrypt.hash(password, 10);

      const user = await User.create({ username, email, password: hashPass ,name});

      success = true;

      return NextResponse.json({ success, message: "Your Account has been created! Login To Use Our Chat App!" });

   } catch (error) {
      console.error("Error creating user:", error);
      return NextResponse.json({ success, error: "Internal Server Error" });
   }
}

export async function PATCH(req:NextRequest) {
 console.log(req)
}
