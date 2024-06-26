"use client";
import Image from "next/image";
import { useState } from "react";
import { Scrollbars } from 'react-custom-scrollbars-2';

export default function SearchBar() {

    
    const users = [
        { name: "Khan", message: "Lorem ipsum dolor sit amet." },
        { name: "ALi", message: "You: Lorem ipsum dolor sit amet asdjnsalkdnakdalkndalkdn." },
        { name: "Baba", message: "Lorem ipsum dolor sit amet." },
        { name: "Khan", message: "Lorem ipsum dolor sit amet." },
        { name: "ALi", message: "You: Lorem ipsum dolor sit amet asdjnsalkdnakdalkndalkdn." },
        { name: "Baba", message: "Lorem ipsum dolor sit amet." },
        { name: "Khan", message: "Lorem ipsum dolor sit amet." },
        { name: "ALi", message: "You: Lorem ipsum dolor sit amet asdjnsalkdnakdalkndalkdn." },
        { name: "Baba", message: "Lorem ipsum dolor sit amet." },
        { name: "Khan", message: "Lorem ipsum dolor sit amet." },
        { name: "ALi", message: "You: Lorem ipsum dolor sit amet asdjnsalkdnakdalkndalkdn." },
        { name: "Baba", message: "Lorem ipsum dolor sit amet." },
        { name: "Khan", message: "Lorem ipsum dolor sit amet." },
        { name: "ALi", message: "You: Lorem ipsum dolor sit amet asdjnsalkdnakdalkndalkdn." },
        { name: "Baba", message: "Lorem ipsum dolor sit amet." },
    ];

    const [selectedIndex, setSelectedIndex] = useState(0); // Track selected index

    const changeColor = (index:number,user:any) => {
        setSelectedIndex(index); // Toggle selection
        console.log(user)
    };

    return (
        <div style={{height:"100vh"}}>
            <div className="py-2">
                <input type="search" placeholder="Search" className="form-control" style={{ backgroundColor: "#dbdcff", color: "white" }} />
            </div>
            <Scrollbars autoHide style={{ height: "90vh" }} 
            >
            <div className="py-2">
                {users.map((user, index) => (
                    <div key={index} onClick={() => changeColor(index,user)} className="user-item">
                        <div className="d-flex" style={{
                            backgroundColor: index === selectedIndex ? "#eeeef8" : "transparent", // Apply background color based on selection`
                            borderRadius: 10,
                            marginBottom: "10px" // Gap between users
                        }}>
                            <div>
                                <Image src={'/boy.png'} width={60} height={60} alt="Profile Picture" />
                            </div>
                            <div className="px-2 pt-1">
                                <h5 style={{fontWeight:"revert-layer"}}>{user.name}</h5>
                                <span style={{ fontSize: "13px",fontWeight:"normal",color:"#bbbabb"  }}>{user.message.substring(0,30)}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            </Scrollbars>
        </div>
    );
}
