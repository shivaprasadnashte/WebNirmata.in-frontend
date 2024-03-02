import Buildpage from "@/components/shared/Buildpage";
import Navbar from "@/components/shared/Navbar";
import SideBar from "@/components/shared/SideBar";

export default function Home() {
  return (
    <>
      <div>
        <Navbar />
        <div className=" flex justify-between min-h-screen">
         
            <Buildpage />
         

         
         <SideBar />
       
        </div>
      </div>
    </>
  );
}
