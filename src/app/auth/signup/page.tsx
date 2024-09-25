"use client";
import Image from "next/image"
import Link from "next/link"
import React, { useState, ChangeEvent } from 'react';
import { useAppDispatch, useAppSelector } from "@/redux_toolkit/hooks";
import { createUser } from "@/redux_toolkit/auth/authSlice";
import ButtonLoader from "@/components/LoadingUI/btnLoader";
import { useRouter } from "next/navigation";
export default function Signup() {
    const router = useRouter()
    const dispatch = useAppDispatch()
    const isLoading = useAppSelector((selector)=>selector.auth.isLoading);

    type userData = {
        name:string,
        email:string,
        password:string,
        username:string
        profile:string
    }

    const [selectedImage,setSelectedImage] = useState("default");

    const [user , setUser] = useState<userData>({
        name:"",
        email:"",
        password:"",
        username:"",
        profile:""
    })

    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        setUser({...user,[e.target.name]:e.target.value})
    }
    
    const handleChange1 = (e:ChangeEvent<HTMLInputElement>)=>{
        setUser({...user,[e.target.name]:e.target.value})

    }
    const handleClick = async() => {
        const userAction = await dispatch(createUser(user));
        if(userAction?.payload?.success){
            setUser({ name: "", email: "", password: "", username: "" ,profile:""});
            router.push("/auth/login")
        }
    }

    const handleImage = () => {
        const imgFile = document.createElement("input");
        imgFile.type = "file";
        imgFile.accept = "image/**";
        imgFile.click();
        imgFile.addEventListener("change",(e:any)=>{
            const file = e.target.files[0];
            if(file?.type?.includes("image")) {
                const reader = new FileReader();
                reader.onload = () => {
                    setSelectedImage(String(reader.result));
                    setUser({...user,profile:String(reader.result)});
                }
                reader.readAsDataURL(file);
            }
        })
    }
    
    return (
        <>
        <div className="px-2 py-2" style={{
            height:"100vh"
        }}>
            <Image src={'/makb.png'} alt="Logo" width={90} height={70}></Image>
            <div className="d-flex justify-content-center align-items-center">
                <div className="col-xl-3 col-lg-4 col-md-8 col-sm-6 col-12 px-2">
                    <div className="form  px-4 py-3" style={{
                        border: '1px solid #dedede',
                        borderRadius: 6
                    }}>
                        <h4 className="py-2" style={{ fontWeight: 300 }}>Welcome !</h4>
                        <h3>Sign up to</h3>
                        <p style={{ fontSize: 14 }}>MAKB CHAT APPLICATION</p>
                        <div className="my-1 d-flex align-items-center">
                        <Image src={selectedImage == "default" ? '/boy.png':selectedImage} width={60} height={60} alt="Profile Picture"  onClick={()=>handleImage()} style={{borderRadius:"50%"}}/>
                        <span className="justify-self-end px-2" >Add Profile Pic</span>
                        </div>
                        <div className="input_fields py-2">
                            <label style={{ fontSize: 13 }} htmlFor="username">Full Name</label>
                            <input value={user.name} type="text" onChange={(e)=>handleChange(e)} className="form-control" name="name" placeholder="Enter your name" style={{
                                border: '1px solid #dedede',
                                fontSize: 13,
                                height: 45,
                            }} />
                        </div>
                        <div className="input_fields py-2">
                            <label style={{ fontSize: 13 }} htmlFor="username">User name</label>
                            <input value={user.username} type="text" name="username" onChange={(e)=>handleChange(e)}  className="form-control" placeholder="Enter your user name" style={{
                                border: '1px solid #dedede',
                                fontSize: 13,
                                height: 45,
                            }} />
                        </div>
                        <div className="input_fields py-2">
                            <label style={{ fontSize: 13 }} htmlFor="username">Email</label>
                            <input value={user.email} type="text" name="email" onChange={(e)=>handleChange(e)}  className="form-control" placeholder="Enter your email" style={{
                                border: '1px solid #dedede',
                                fontSize: 13,
                                height: 45,
                            }} />
                        </div>
                        <div className="input_fields py-2">
                            <label style={{ fontSize: 13 }} htmlFor="username">Password</label>
                            <input value={user.password} type="password" name="password" onChange={(e)=>handleChange(e)}  className="form-control" placeholder="Enter password" style={{
                                border: '1px solid #dedede',
                                fontSize: 13,
                                height: 45
                            }} />
                        </div>
                        <div className="py-2 d-grid">
                            <button className="btn btn-dark text-center d-flex justify-content-center align-items-center" onClick={()=>handleClick()} style={{
                                height: 40
                            }}>{isLoading ? <ButtonLoader />:"Login"}</button>
                        </div>
                        <div className="py-2 text-center">
                            <span>Already have an Account?</span><Link className="text-decoration-none px-2" href={'/auth/login'}>Login</Link>
                        </div>

                    </div>
                </div>
                <div className="col-7 hide">
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