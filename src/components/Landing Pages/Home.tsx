import Image from "next/image"
export default function LandingHome () {
    return (
        <div className="row justify-content-center py-3 align-items-center">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                <h1>Start chatting with customers, anytime, anywhere with MAKB</h1>
                <p className="py-2" style={{color:'5B7486'}}>Great software that allows you to chat from any place at any time without any interuption.</p>
                <div>
                    <button className="btn btn-warning btn-lg text-light">Start Chatting Now -{`>`}</button>
                </div>
                <div className="d-flex justify-content- align-items-center pt-5">
                    <div className="row align-items-center justify-content-center">
                        <div>
                        <Image src={'/Images.png'} alt="Images" height={100} width={100} style={{
                            height:"auto",
                            width:'auto'
                        }}></Image>
                        </div>
                        <div>
                        <h4 className="mx-3">2,291</h4>
                        <p className="mx-3">Happy Customerss</p>
                        </div>
                    </div>
                    <div style={{
                        height:"50px",
                        width:"2px",
                        backgroundColor:"black"
                    }}></div>
                    <div className="mx-3">
                        <h4>4.8/5</h4>
                        <p>Rating</p>
                    </div>
                </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                <Image alt="Image of Girl" src={'/Image.png'} height={200} width={500} style={{
                    height:'100%',
                    width:'100%'
                }}></Image>
            </div>
        </div>
    )
}