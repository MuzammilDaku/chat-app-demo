import Image from "next/image";

export default function LandingFeature1(){
    return(
        <div style={{
            backgroundColor:'C4C4C4',
        }} className="py-4 text-center">
            <div className="row justify-content-center align-items-center py-2" style={{
                // padding:100
            }}>
                <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12 col-12">
                    <Image src={'/girl.png'} height={365} width={526} alt="Girl Image" style={{
                        height:"auto",
                        width:"100%"
                    }}></Image>
                </div>
                <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12 col-12">
                    <h2>Meet your customers, with live video chat</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus ratione incidunt ab?</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum molestiae esse quaerat?</p>
                </div>
            </div>
        </div>
    )
}