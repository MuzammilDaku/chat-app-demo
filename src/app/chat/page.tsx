import ChatSection from "@/components/Chat/ChatSection";
import SearchBar from "@/components/Chat/SearchBar";
import SideBar from "@/components/Chat/SideBar";

export default function Chat () {
    return (
       <div className="container-fluid d-flex justify-content-between font-chat">
        {/* <div className="col-1">
            <SideBar />
        </div> */}
        <div className="col-3">
        <SearchBar />
        </div>
        <div className="col-9">
            <ChatSection />
        </div>
       </div>
    )
}