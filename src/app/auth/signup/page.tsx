"use client";

import Image from "next/image"
import Link from "next/link"
import React, { useState, ChangeEvent } from 'react';
import Head from "next/head";

export default function Signup() {

    type userData = {
        name:string,
        email:string,
        password:string,
        username:string
    }

    const [user , setUser] = useState<userData>({
        name:"",
        email:"",
        password:"",
        username:""
    })

    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        setUser({...user,[e.target.name]:e.target.value})
    }
    
    const handleClick = () => {

    }

    return (
        <>
               <head>
            <title>Chat App|SignUp</title>
        </head>
        <div className="px-2 py-2">
            <Image src={'/makb.png'} alt="Logo" width={90} height={70}></Image>
            <div className="d-flex justify-content-center align-items-center">
                <div className="col-4 px-2">
                    <div className="form  px-4 py-3" style={{
                        border: '1px solid #dedede',
                        borderRadius: 6
                    }}>
                        <h4 className="py-2" style={{ fontWeight: 300 }}>Welcome !</h4>
                        <h3>Sign up to</h3>
                        <p style={{ fontSize: 14 }}>MAKB CHAT APPLICATION</p>
                        <div className="input_fields py-2">
                            <label style={{ fontSize: 13 }} htmlFor="username">Full Name</label>
                            <input type="text" onChange={(e)=>handleChange(e)} className="form-control" name="name" placeholder="Enter your name" style={{
                                border: '1px solid #dedede',
                                fontSize: 13,
                                height: 45,
                            }} />
                        </div>
                        <div className="input_fields py-2">
                            <label style={{ fontSize: 13 }} htmlFor="username">User name</label>
                            <input type="text" name="username" onChange={(e)=>handleChange(e)}  className="form-control" placeholder="Enter your user name" style={{
                                border: '1px solid #dedede',
                                fontSize: 13,
                                height: 45,
                            }} />
                        </div>
                        <div className="input_fields py-2">
                            <label style={{ fontSize: 13 }} htmlFor="username">Email</label>
                            <input type="text" name="email" onChange={(e)=>handleChange(e)}  className="form-control" placeholder="Enter your email" style={{
                                border: '1px solid #dedede',
                                fontSize: 13,
                                height: 45,
                            }} />
                        </div>
                        <div className="input_fields py-2">
                            <label style={{ fontSize: 13 }} htmlFor="username">Password</label>
                            <input type="password" name="password" onChange={(e)=>handleChange(e)}  className="form-control" placeholder="Enter password" style={{
                                border: '1px solid #dedede',
                                fontSize: 13,
                                height: 45
                            }} />
                        </div>
                        <div className="py-2 d-grid">
                            <button className="btn btn-dark" style={{
                                height:40
                            }}>Register</button>
                        </div>
                        <div className="py-2 text-center">
                            <span>Already have an Account?</span><Link className="text-decoration-none px-2" href={'/auth/login'}>Login</Link>
                        </div>

                    </div>
                </div>
                <div className="col-7">
                    <Image src={'/login.png'} height={450} width={827} style={{
                        height:'auto',
                        width:'90%'
                    }} alt="Image"/>
                </div>
            </div>
        </div>
        </>
    )
}