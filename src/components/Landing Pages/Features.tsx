import Image from "next/image"
export default function LandingFeatures() {
    return (
        <div className="py-5">
            <h2 className="text-center">Features for a better experience</h2>
            <div className="row justify-content-center align-items-center py-4">
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
                    <div className="d-flex ">
                      <div>
                      <Image src={'/icon1.png'} alt="Vide Call" height={60} width={60}></Image>
                      </div>
                        <div className="px-3">
                            <h5>Video messaging</h5>
                            <p style={{fontSize:14}}>This software is very easy for you to
                                manage. You can use it as you wish.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
                    <div className="d-flex ">
                      <div>
                      <Image src={'/icon2.png'} alt="Video Call" height={60} width={60}></Image>
                      </div>
                        <div className="px-3">
                            <h5>Save your time</h5>
                            <p style={{fontSize:14}}>This software is very easy for you to
                                manage. You can use it as you wish.
                            </p>
                        </div>
                    </div>
                </div>       
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
                    <div className="d-flex ">
                      <div>
                      <Image src={'/icon 3.png'} alt="Video Call" height={60} width={60}></Image>
                      </div>
                        <div className="px-3">
                            <h5>Keep safe & private</h5>
                            <p style={{fontSize:14}}>This software is very easy for you to
                                manage. You can use it as you wish.
                            </p>
                        </div>
                    </div>
                </div>                
            </div>
        </div>
    )
}