import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import InfoModal from "../components/InfoModal";

const MainLayout = () => {
const [isModal,setIsmodal]=useState(false)
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 ">
   
      <div className="fixed left-0 top-0 h-full w-16 z-50">
        <Sidebar  setIsmodal={(data)=>setIsmodal(data)} />
      </div>

      <InfoModal isOpen={isModal} onClose={()=>setIsmodal(false)}/>
        
      <div className="ml-16  relative z-0 ">

        <div className="overflow-x-hidden">
          <Outlet />
        </div>
      </div>

  
      <div className="fixed bottom-0 left-16 right-0">
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
