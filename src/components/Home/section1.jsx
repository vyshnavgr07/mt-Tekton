import React from "react";
import SheepAnimation from "../SheepAnimation";


const section1 = () => {
  return (
    <div className="h-full p-4 mt-2 flex flex-col gap-4 ">
      <div className="">
        <p className="text-3xl text-gray-400">Recently mastered the art of PowerPoint.</p>
        <p className="text-3xl">Nice to meet you, I’m Sean Lin.</p>
      </div>
      <div className="w-full flex">
 
  <div className="w-3/4 ">
    <SheepAnimation />
  </div>

  <div className="w-1/4">
  <div className="relative flex flex-col items-center mt-10">
    {/* Title */}
    <div className="flex flex-col items-center mb-2">
      <span className="text-purple-700 font-semibold underline cursor-pointer">
        Meet Sean
      </span>
    </div>

    {/* Body */}
    <img
      src="/body.png"
      alt="Cartoon Body"
      className="w-56"
    />

    {/* Head (absolute on top of body) */}
    <img
      src="https://static.vecteezy.com/system/resources/previews/002/843/426/non_2x/cute-little-boy-head-comic-character-free-vector.jpg"
      alt="Head"
      className="absolute top-0 w-24 rounded-full translate-y-4" 
    />
  </div>
</div>


</div>




      <div className=" w-full">
       <div className="max-w-xl ">
       <p className="text-[12px] text-black  ">Sean Chasing Three Sheep • 2021 • Pixel on Web</p>
        <p className="text-[12px] mt-4">“Sean Chasing Three Sheep” as the title suggests, illustrates the artist chasing three sheep. Lin, currently a Resident Alien living in the United States of America, runs in place with a hopeful facade and watches as his dreams slip away. A seemingly light hearted and humorous narrative, disguises a deeper reality and fear of unemployment, immigration status, and uninspiring design.
        </p>
       </div>
      
</div>


    </div>
  );
};

export default section1;
