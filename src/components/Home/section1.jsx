import React from "react";
import SheepAnimation from "../SheepAnimation";


const section1 = () => {
  return (
    <div className="h-full p-4 md:px-8 mt-2 flex flex-col gap-4 ">
      <div className=" ">
        <div>
        <p className="text-3xl text-gray-400">Recently mastered the art of PowerPoint.</p>
        <p className="text-3xl">Nice to meet you, I’m Sean Lin.</p>
        </div>
       <div className="flex  justify-end  md:pr-15">

       <p className="text-purple-700 font-semibold underline cursor-pointer">
        Meet Sean
      </p>
       </div>
      </div>
      <div className="w-full flex">
 
  <div className="w-3/4  ">
    <SheepAnimation />
  </div>

   <div className="w-1/4  mt-18 md:mt-1 flex md:flex-none  items-center md:items-start    ">
  <div className="relative flex flex-col items-center mt-1">
  



    <img
      src="/body1.png"
      alt="Cartoon Body"
      className=""
    />

    <img
      src="head.png"
      alt="Head"
      className="absolute   left-1/2 top-0 w-10 md:w-17 lg:w-22      rounded-full translate-y-4 hover:scale-110 " 
    />
  </div>
</div> 






</div>




      <div className=" w-full">
       <div className="max-w-xl ">
       <p className="text-[12px] text-black  ">Sean Chasing Three Sheep • 2021 • Pixel on Web</p>
        <p className="text-[12px] mt-4 text-[#999eb9]">“Sean Chasing Three Sheep” as the title suggests, illustrates the artist chasing three sheep. Lin, currently a Resident Alien living in the United States of America, runs in place with a hopeful facade and watches as his dreams slip away. A seemingly light hearted and humorous narrative, disguises a deeper reality and fear of unemployment, immigration status, and uninspiring design.
        </p>
       </div>
      
</div>


    </div>
  );
};

export default section1;
