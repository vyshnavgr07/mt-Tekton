import React from "react";

export default function InfoModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-full bg-opacity-40 flex justify-center h-[324px] z-50">
      <div className="w-full  bg-white text-black  shadow-lg p-6 relative">
       
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-2xl font-bold text-gray-700 hover:text-black"
        >
          ✕
        </button>

        <div className="flex  justify-between gap-6">
          {/* Left Section */}
          <div className="">
            <h2 className="text-xl font-semibold mb-4">
              Let me <br /> catch you up
            </h2>
            <div className="flex gap-4">
              <div className="flex flex-col space-y-2 text-purple-700 underline text-xs sm:text-sm leading-snug">
                <a href="#" className="">Email</a>
                <a href="#" className="">Résumé</a>
                <a href="#" className="">LinkedIn</a>
              </div>
              <div className="flex flex-col space-y-2 text-purple-700 underline text-xs sm:text-sm leading-snug">
                <a href="#" className="">Behance</a>
                <a href="#" className="">Instagram</a>
                <a href="#" className="">Youtube</a>
              </div>
            </div>
          </div>

        

          {/* Right Section */}
          <div className="flex w-3/6 text-base md:leading-relaxed">
          <div className="text-xs sm:text-sm leading-snug md:text-base  md:leading-relaxed ">
    <p>
      Right before that at <span className="text-purple-700">Apple</span> and{" "}
      <span className="text-purple-700">Figmints</span>, I worked with
      interdisciplinary teams to design impactful and interactive brand
      and marketing solutions.
    </p>
    <br />
    <p>
      A while ago, I graduated from the{" "}
      <span className="text-purple-700">
        Rhode Island School of Design
      </span>{" "}
      with a BFA in Industrial and Product Design with a concentration
      in Creative Computation, Technology & Culture.
    </p>
  </div>

  <div className="text-xs sm:text-sm leading-snug md:text-base  md:leading-relaxed hidden md:block">
    <p>
      Right before that at <span className="text-purple-700">Apple</span> and{" "}
      <span className="text-purple-700">Figmints</span>, I worked with
      interdisciplinary teams to design impactful and interactive brand
      and marketing solutions.
    </p>
    <br />
    <p>
      A while ago, I graduated from the{" "}
      <span className="text-purple-700">
        Rhode Island School of Design
      </span>{" "}
      with a BFA in Industrial and Product Design with a concentration
      in Creative Computation, Technology & Culture.
    </p>
  </div>
</div>

    
        </div>
      </div>
    </div>
  );
}
