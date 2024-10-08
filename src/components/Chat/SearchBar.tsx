"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Scrollbars } from 'react-custom-scrollbars-2';
import { useAppDispatch } from "@/redux_toolkit/hooks";
import { getUsers } from "@/redux_toolkit/chats/chatSlice";
import User from "@/config/models/Users";
export default function SearchBar() {

    const dispatch = useAppDispatch();
    useEffect(()=>{
        async function get () {
            const users =await dispatch(getUsers());
            setUsers(users?.payload?.users);
        }
        get();
    },[])
    
    const [users,setUsers] = useState<any>([]);

    const [selectedIndex, setSelectedIndex] = useState(0); 

    const changeColor = (index:number,user:any) => {
        setSelectedIndex(index); 
    };

    return (
        <div style={{height:"100vh"}}>
            <div className="py-2">
                <input type="search" placeholder="Search" className="form-control" style={{ backgroundColor: "#dbdcff", color: "white" }} />
            </div>
            <Scrollbars autoHide style={{ height: "90vh",overflowX:"hidden" }} 
            >
            <div className="py-2">
                {users.map((user:User, index:number) => (
                    <div key={index} onClick={() => changeColor(index,user)} className="user-item">
                        <div className="d-flex" style={{
                            backgroundColor: index === selectedIndex ? "#eeeef8" : "transparent", 
                            borderRadius: 10,
                            marginBottom: "10px" // Gap between users
                        }}>
                            <div>
                                <Image src={user?.profile == "default"? '/boy.png':user?.profile} width={60} height={60} alt="Profile Picture" />
                            </div>
                            <div className="px-2 pt-1">
                                <h5 style={{fontWeight:"revert-layer"}}>{user?.name}</h5>
                                {/* <span style={{ fontSize: "13px",fontWeight:"normal",color:"#bbbabb"  }}>{user?.messages?.substring(0,30)}</span> */}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            </Scrollbars>
        </div>
    );
}
