"use client";
import Image from "next/image"
import Link from "next/link"
import { useAppDispatch, useAppSelector } from "@/redux_toolkit/hooks";
import ButtonLoader from "@/components/LoadingUI/btnLoader";
import { ChangeEvent, useState } from "react";
import { loginUser } from "@/redux_toolkit/auth/authSlice";
import { useRouter } from "next/navigation";

export default function Login() {
    const router = useRouter()
    const dispatch = useAppDispatch();
    const isLoading = useAppSelector((state) => state.auth.isLoading);
  
    const [user,setUser] = useState({
        emailOrUsername:"",
        password:""
    })

    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        setUser({...user,[e.target.name]:e.target.value});
    }

    const handleClick = async()=> {
        const login = await dispatch(loginUser(user));
        if(login.payload.success) {
            router.push('/')
        }
    }
    return (
        <>
        <div className="px-2 py-2">
            <Image src={'/makb.png'} alt="Logo" width={90} height={70}></Image>
            <div className="d-flex justify-content-center align-items-center">
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-8 col-12 px-2">
            <div className="form  px-4 py-3" style={{
                        border: '1px solid #dedede',
                        borderRadius: 6
                    }}>
                        <h4 className="py-2" style={{ fontWeight: 300 }}>Welcome !</h4>
                        <h3>Sign in to</h3>
                        <p style={{ fontSize: 14 }}>MAKB CHAT APPLICATION</p>
                        <div className="input_fields py-2">
                            <label style={{ fontSize: 13 }} htmlFor="username">Username or Email</label>
                            <input type="text" onChange={(e)=>handleChange(e)} name="emailOrUsername" className="form-control" placeholder="Enter your username or email" style={{
                                border: '1px solid #dedede',
                                fontSize: 13,
                                height: 45,
                                // width:'95%'
                            }} />
                        </div>
                        <div className="input_fields py-2">
                            <label style={{ fontSize: 13 }} htmlFor="username">Password</label>
                            <input name="password" onChange={(e)=>handleChange(e)} type="text" className="form-control" placeholder="Enter your password" style={{
                                border: '1px solid #dedede',
                                fontSize: 13,
                                height: 45
                            }} />
                        </div>
                        <div className="d-flex justify-content-between align-items-center py-2">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label style={{ fontSize: 13 }} className="form-check-label" htmlFor="flexCheckDefault">
                                    Remember me
                                </label>
                            </div>
                            <div>
                                <Link href={'#'} style={{ fontSize: 13, margin: 0 }}>Forgot Password?</Link>
                            </div>
                        </div>
                        <div className="py-2 d-grid">
                            <button className="btn btn-dark text-center d-flex justify-content-center align-items-center" onClick={()=>handleClick()} style={{
                                height: 40
                            }}>{isLoading ? <ButtonLoader />:"Login"}</button>
                        </div>
                        <div className="py-3 text-center">
                            <span>Don't have an Account?</span><Link className="text-decoration-none px-2" href={'/auth/signup'}>Register</Link>
                        </div>

                    </div>
                </div>
                <div className="col-7 hide">
                    <Image src={'/login.png'} height={450} width={827} style={{
                        height: 'auto',
                        width: '90%'
                    }} alt="Image" />
                </div>
            </div>
        </div>
        </>
    )
}