import Navbar from "@/components/Navbar/Navbar";
import LandingHome from "@/components/Landing Pages/Home";
import LandingFeatures from "@/components/Landing Pages/Features";
import LandingFeature1 from "@/components/Landing Pages/Feature1";
import LandingFeature2 from "@/components/Landing Pages/Feature2";
import mongoConnect from "@/config/db";
export default function Home () {
 mongoConnect();
  return (   
    <div className="container">
    <Navbar /> 
    <LandingHome />
    <LandingFeatures />
    <LandingFeature1 />
    <LandingFeature2 />
    </div>
  )
}