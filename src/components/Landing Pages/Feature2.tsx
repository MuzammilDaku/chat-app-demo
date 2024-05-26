import Image from "next/image";

export default function LandingFeature2(){
    return(
        <div style={{
        }} className="py-4">
            <div className="d-flex justify-content-center align-items-center py-2" style={{
                // padding:100
            }}>
                 <div className="col-5">
                    <h2>Start Selling Directly</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus ratione incidunt ab?</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum molestiae esse quaerat?</p>
                    <div className="pt-4">
                    <button className="btn btn-warning text-light py-2">Start Chatting Now</button>

                    </div>
                </div>
                <div className="col-7">
                    <Image src={'/image11.png'} height={365} width={600} alt="Girl Image" style={{
                        height:"auto",
                        // width:"100%"
                    }}></Image>
                </div>
               
            </div>
        </div>
    )
}