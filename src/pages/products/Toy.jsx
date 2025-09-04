// import React from 'react'

// const Toy = () => {
//   return (
//     <div className='w-full'>
// <div className="w-full h-screen">
//   <img
//     src="https://cdn.animaapp.com/projects/5c15b5b3a5949b000be12d9a/releases/60df861eb2bf67dec5162fef/img/toy-background-image-fill-B3832511-3F95-4348-A6F7-9ED5FEDFB7CC.png"
//     alt="background"
//     className="w-full h-full object-cover"
//   />
// </div>

// <div className='w-full flex md:justify-center bg-[#242b69]'>
// <div className="flex w-full  md:w-5xl min-h-screen  text-white px-16 py-12">
//   {/* Left side */}
//   <div className="w-1/2 flex flex-col justify-start">
//     <h1 className="text-5xl font-normal leading-snu">
//       Packaging <br /> with <br />Intention
//     </h1>
//     <p className="text-gray-400  mt-2 text-3xl">Paper-Pals</p>
//   </div>

//   {/* Right side */}
//   <div className="w-1/2 lg:w-[381px] flex flex-col">

//     <div className="flex justify-between mb-6 text-sm">

//       <div className="w-1/2 pr-6">
//         <p className="text-text-whitez font-medium">Ambition</p>
//         <p>
//           How might we extend the product life of children's toys through
//           thoughtful package structures and digital extensions?
//         </p>
//       </div>

//       <div className="w-1/3">
//         <p className="text-text-whitefont-medium">Solution</p>
//         <p>Package Design<br />UI/UX</p>

//         <p className="text-text-white font-medium mt-4">Role</p>
//         <p>Self-Led Project</p>
//       </div>
//     </div>

//     <p className="text-sm leading-relaxed mb-6">
//       With its short product life, and often times wasteful, non-recyclable
//       packaging, children’s toys pose significant threats to our environment.
//       Designing a sustainable packaging requires considerations beyond material
//       and form, but also it’s functionality. “Why can’t packaging become part of
//       the product?”, was the question I asked myself moving forward with this
//       project.
//     </p>

//     <div>
//       <img
//         src="https://cdn.animaapp.com/projects/5c15b5b3a5949b000be12d9a/releases/610989db1a0840c0c6094968/img/toy-rectangle-copy-D0213A24-DB4E-4203-9016-670DAE7F7AA3@2x.png"
//         alt="Toy Packaging"
//         className="rounded-md shadow-md md:h-[254px] mb-6"
//       />
//     </div>

// <div className='w-14 h-[2px] bg-gray-50 mb-6'></div>
// <div className='w-full md:w-[351px]'>
// <p className="text-text-white font-medium mb-6">Perfect Subject</p>
// <p className="text-sm leading-relaxed mb-6">
// The Nuts and Bolt toys have been around for decades to help children ages 2-4 develop their motor skills, coordination, memory, dexterity, concentration, and pattern recognition.
//     </p>
//     <p className="text-sm leading-relaxed mb-6">
//     With a narrow target age range,  it was important to think of ways to increase the life span of the product by introducing other functional elements like building and creativity into the product’s usage without altering the product itself    </p>
// </div>

//   </div>
// </div>

// </div>

//     </div>
//   )
// }

// export default Toy

import React from "react";

const Toy = () => {
  return (
    <div className="w-full h-full bg-[#242b69]  ">
      {/* first */}
      <div className="w-full h-screen ">
        <img
          src="https://cdn.animaapp.com/projects/5c15b5b3a5949b000be12d9a/releases/60df861eb2bf67dec5162fef/img/toy-background-image-fill-B3832511-3F95-4348-A6F7-9ED5FEDFB7CC.png"
          alt="background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="w-full flex flex-col md:justify-center  items-center py-10 ">
        <div className="flex flex-col w-full  gap-8  md:w-5xl min-h-screen text-white px-6 md:px-16 ">


          <div className="flex flex-col md:flex-row w-full  min-h-screen text-white px-6 md:px-16 ">
            {/* Left side */}
            <div className="w-full md:w-1/2 flex flex-col justify-start mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-normal ">
                Packaging <br /> with <br />
                Intention
              </h1>
              <p className="text-gray-400 mt-2 text-2xl md:text-3xl">
                Paper-Pals
              </p>
            </div>

            {/* Right side */}
            <div className="w-full md:w-1/2 lg:w-[381px] flex flex-col">
              {/* Ambition + Solution/Role */}
              <div className="flex flex-col md:flex-row justify-between mb-6 text-sm">
                <div className="w-full md:w-1/2 md:pr-6 mb-6 md:mb-0">
                  <p className="text-white font-medium">Ambition</p>
                  <p>
                    How might we extend the product life of children's toys
                    through thoughtful package structures and digital
                    extensions?
                  </p>
                </div>

                <div className="w-full md:w-1/3">
                  <p className="text-white font-medium">Solution</p>
                  <p>
                    Package Design <br /> UI/UX
                  </p>

                  <p className="text-white font-medium mt-4">Role</p>
                  <p>Self-Led Project</p>
                </div>
              </div>

              <p className="text-sm leading-relaxed mb-6">
                With its short product life, and often times wasteful,
                non-recyclable packaging, children’s toys pose significant
                threats to our environment. Designing a sustainable packaging
                requires considerations beyond material and form, but also it’s
                functionality. “Why can’t packaging become part of the
                product?”, was the question I asked myself moving forward with
                this project.
              </p>

              <div>
                <img
                  src="https://cdn.animaapp.com/projects/5c15b5b3a5949b000be12d9a/releases/610989db1a0840c0c6094968/img/toy-rectangle-copy-D0213A24-DB4E-4203-9016-670DAE7F7AA3@2x.png"
                  alt="Toy Packaging"
                  className="rounded-md shadow-md md:h-[254px] mb-6"
                />
              </div>

              <div className="w-14 h-[2px] bg-gray-50 mb-6"></div>

              <div className="w-full md:w-[351px] ">
                <p className="text-white font-medium mb-6">Perfect Subject</p>
                <p className="text-sm leading-relaxed mb-6">
                  The Nuts and Bolt toys have been around for decades to help
                  children ages 2-4 develop their motor skills, coordination,
                  memory, dexterity, concentration, and pattern recognition.
                </p>
                <p className="text-sm leading-relaxed mb-6">
                  With a narrow target age range, it was important to think of
                  ways to increase the life span of the product by introducing
                  other functional elements like building and creativity into
                  the product’s usage without altering the product itself
                </p>
              </div>
            </div>
          </div>



     {/*third*/}
          <div className="w-full h-[500px] flex justify-center ">
            <img
              src="https://cdn.animaapp.com/projects/5c15b5b3a5949b000be12d9a/releases/60d3c5d455e6cd6bc1177de9/img/toy-background-image-fill-copy-2-1B271DE9-F614-4469-A34C-ADA91EC4B474.jpg"
              alt="Toy Background"
              className="object-cover w-full h-full"
            />
          </div>

  <div className="flex w-full gap-8 ">
  <img
    src="https://cdn.animaapp.com/projects/5c15b5b3a5949b000be12d9a/releases/60d3c5d455e6cd6bc1177de9/img/toy-background-image-fill-copy-2-1B271DE9-F614-4469-A34C-ADA91EC4B474.jpg"
    alt="Toy Background"
    className="w-1/2 h-auto object-cover"
  />
  <img
    src="https://cdn.animaapp.com/projects/5c15b5b3a5949b000be12d9a/releases/60d3c5d455e6cd6bc1177de9/img/toy-background-image-fill-copy-2-1B271DE9-F614-4469-A34C-ADA91EC4B474.jpg"
    alt="Toy Background"
    className="w-1/2 h-auto object-cover"
  />
</div>


<div className="flex justify-end w-full   ">
<div className="w-full md:w-1/2 md:pr-6 mb-6 md:mb-0  md:px-10">
                  <p className="text-white font-medium">The Packaging</p>
                  <p className="mb-4">
                  The Final Design is a simple, compact, and smart packaging that elevates the product.
                  </p>
                  <p>
                  At first glance, the packaging showcases the nuts and bolts in a neat and organized fashion, the tone down colors of the cardboard also highlights the colorful and fun characteristics of the product itself.                  </p>
  </div>

</div>
      
<div className="w-full h-[500px] flex justify-center ">
            <img
              src="https://cdn.animaapp.com/projects/5c15b5b3a5949b000be12d9a/releases/60d3c325a933b674c022f4bb/img/toy-background-image-fill-copy-18108B56-CF0D-4DA3-9D19-B35092A478A9.jpg"
              alt="Toy Background"
              className="object-cover w-full h-full"
            />
          </div>


          <div className="flex justify-end w-full   "> 

          <div className="w-full md:w-1/2 md:pr-6 mb-6 md:mb-0  md:px-10 ">
                      <p className="mb-4" >
                  At first glance, the packaging showcases the nuts and bolts in a neat and organized fashion, the tone down colors of the cardboard also highlights the colorful and fun characteristics of the product itself.
                  </p>
                  <p>
                  At first glance, the packaging showcases the nuts and bolts in a neat and organized fashion, the tone down colors of the cardboard also highlights the colorful and fun characteristics of the product itself.
                  </p>
  </div>

  </div>

 <div className="w-full h-[500px] flex justify-center ">
            <img
              src="https://cdn.animaapp.com/projects/5c15b5b3a5949b000be12d9a/releases/60df7bc9db574fe1519c2242/img/toy-background-image-fill-copy-DDAAC9A5-1650-4892-8187-A429CA4158A5.jpg"
              alt="Toy Background"
              className="object-cover w-full h-full"
            />
          </div>



          <div className="w-full h-auto md:h-screen flex flex-col md:flex-row px-4">
  {/* Left Column */}
  <div className="w-full md:w-1/2 flex flex-col justify-start mb-6 md:mb-0">
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-normal">
      The Digital <br />
      Experience
    </h1>
  </div>

  {/* Right Column */}
  <div className="w-full md:w-1/2">
    <p className="text-sm leading-relaxed mb-4 md:mb-6">
      With its short product life, and often times wasteful,
      non-recyclable packaging, children’s toys pose significant
      threats to our environment. Designing a sustainable packaging
      requires considerations beyond material and form, but also it’s
      functionality. “Why can’t packaging become part of the
      product?”, was the question I asked myself moving forward with
      this project.
    </p>

    <p className="text-sm leading-relaxed mb-4 md:mb-6">
      With its short product life, and often times wasteful,
      non-recyclable packaging, children’s toys pose significant
      threats to our environment. Designing a sustainable packaging
      requires considerations beyond material and form, but also it’s
      functionality. “Why can’t packaging become part of the
      product?”, was the question I asked myself moving forward with
      this project.
    </p>
  </div>
</div>





        </div>

   

      </div>
    </div>
  );
};

export default Toy;
