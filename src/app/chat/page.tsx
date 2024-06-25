import ChatSection from "@/components/Chat/ChatSection";
import SearchBar from "@/components/Chat/SearchBar";

export default function Chat () {
    return (
       <div className="container-fluid d-flex justify-content-between font-chat">
        <div className="col-3">
        <SearchBar />
        </div>
        <div className="col-9">
            <ChatSection />
        </div>
       </div>
    )
}