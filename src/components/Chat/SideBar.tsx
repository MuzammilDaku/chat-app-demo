import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
export default function SideBar () {
    return(
        <div style={{
            backgroundColor:"black",
            height:'100vh',
        }}>
            <div className="logo" >
                <Image src={'/makb.png'} style={{backgroundColor:'white'}} alt="Logo" height={50} width={50} />
            </div>
        <div className="d-flex justify-content-center align-items-" >
            
            <div className="conversation">
                <FontAwesomeIcon color="blue" height={50} width={50} icon={faMessage}/>
            </div>
        </div>
        </div>

    )
}