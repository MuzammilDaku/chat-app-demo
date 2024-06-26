"use client";
import Image from "next/image";
import { useState } from "react";
import { Scrollbars } from 'react-custom-scrollbars-2';
export default function ChatSection() {
    const messages = [
        {
            owner: "You",
            message: "Hello Bro!",
            time: "9:10pm"
        },
        {
            owner:"Ali",
            message:"Yes Bro !",
            time:"9:18pm"  
        },
        {
            owner:"Ali",
            message:"What's going on ?",
            time:"9:18pm"
        },
        {
            owner:"You",
            message:"Just making a chat app",
            time:"9:25pm"
        },

        {
            owner:"You",
            message:"Just making a chat app",
            time:"9:25pm"
        },
        {
            owner:"You",
            message:"Just making a chat app",
            time:"9:25pm"
        },
        {
            owner:"You",
            message:"Just making a chat app",
            time:"9:25pm"
        },
        {
            owner:"You",
            message:"Just making a chat app",
            time:"9:25pm"
        },

    ]

    return (
        <div className="py-2 px-4">
            <div className="heading d-flex justify-content-between align-items-center">
                <div className="title">
                    <h3 style={{ fontWeight: 500 }}>Ali Khan</h3>
                    <span>Last Seen 15m ago</span>
                </div>
                <div>
                    <span className="px-2">
                        <Image src={'/search.svg'} height={30} width={50} alt="Search Messages" />
                    </span>
                    <span className="px-2">
                        <Image src={'/phone.png'} height={30} width={30} alt="Call" />
                    </span>
                    <span className="px-2">
                        <Image src={'/dots.png'} height={25} width={30} alt="Settings" />
                    </span>
                </div>
            </div>
            <div className="message-section py-2">
                <Scrollbars autoHide style={{ height: "79vh" }} >
                    {
                        messages?.map((user, index) => {
                            return (
                                <div className="py-2" key={index}>
                                    <div className={`d-flex align-items-center ${user.owner === 'You' ? 'justify-content-end':''}`}>
                                        <div>
                                            <Image src={'/boy.png'} width={50} height={50} alt="Profile Picture" />
                                        </div>
                                        <div className={`px-5 py-2 mx-2 
                                            ${user.owner === "You" ? 'myMsgColor':'userMsgColor'}
                                            `} style={{ color: "black",borderRadius:10 }}>
                                            <div>
                                                <h5>
                                                    {user.owner}
                                                </h5>
                                            </div>
                                            <div style={{ fontSize: "14px", fontWeight: "lighter" }}>
                                                {user.message}
                                            </div>
                                            <div style={{
                                               float:"right",
                                               position:'relative',
                                               bottom:0
                                            }}>
                                                {user.time}
                                            </div>

                                        </div>
                                    </div>

                                </div>
                            )
                        })
                    }
                </Scrollbars>
                <div className="footer-message" style={{
                    position: 'fixed', bottom: 0,
                    width: "70%"
                }}>
                    <input type="text" className="form-control" placeholder="Your message" />
                    <div className="px-2" style={{ float: "right" }}>
                        <Image style={{ cursor: "pointer" }} src={'/mic.png'} className="image-p" height={30} width={30} alt="Audio Message" />
                        <Image style={{ cursor: "pointer" }} src={'/send.png'} className="image-p" height={30} width={30} alt="Send" />
                    </div>
                </div>
            </div>
        </div>
    )
}