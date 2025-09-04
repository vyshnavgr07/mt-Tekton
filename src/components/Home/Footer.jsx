// import React from 'react';

// export default function Footer() {
//   const projects = [
//     "A closed loop food delivery service piloted in China that reduces single use plastic while creating a new clean source for recycled resin",
//     "A streamlined chatbot underwriting experience for agents to obtain insurance products more conveniently and seamlessly",
//     "A new loyalty program for business owners that supports smoother business operations and provides opportunities for growth",
//     "An insights dashboard that analyzes employee well-being to help businesses better understand their workforce efficiency and performance", 
//     "A personalized wealth management experience that helps clients achieve their life goals while reassuring their financial future",
//     "A volunteer platform that provides NPOs and Volunteers with an one-stop-shop to connect, take action and track impact"
//   ];

//   const clients = [
//     "Andover Companies",
//     "Apple", 
//     "AT&T",
//     "AXA XL",
//     "City of Fall River",
//     "Edward Jones",
//     "ExxonMobil",
//     "Food Bank for NYC",
//     "Goldman Sachs",
//     "Gordon Food Service",
//     "Lincoln Financial Group",
//     "LDS Church",
//     "Thrivent Financial",
//     "Sewanee University",
//     "State of Kentucky"
//   ];

//   return (
//     <div className="bg-[#000927] text-white min-h-screen flex flex-col ">
//       {/* Main Content */}
//       <div className="flex-1 px-6 ">
//         <div className="max-w-7xl mx-auto h-full">
//           <div className="flex h-full">
//             {/* Left Section - Professional Projects */}
//             <div className="flex-1 pr-8 py-8 ">
//               <div className="mb-8">
//                 <h1 className="text-2xl mb-4">Professional Projects</h1>
//                 <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
//                   NDAs are the death of me, but here's a peek at some projects I've been working on at work
//                 </p>
//               </div>

//               {/* Projects Grid - 2x3 */}
//               <div className="grid grid-cols-2 gap-x-8 gap-y-6 h-auto max-w-xs">
//                 {projects.map((project, index) => (
//                   <div key={index} className="text-gray-300   text-xs leading-snug">
//                     {project}
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Vertical Divider */}
//             <div className="w-[2px]  bg-gray-300 mx-8"></div>

//             {/* Right Section - Selected Clients */}
//             <div className="w-80 pl-8 py-8">
//             <h1 className="text-2xl mb-4"></h1>
//               <div className="mb-8">
//                 <h2 className="text-gray-400 text-sm leading-tight">
//                   Selected<br />Clients
//                 </h2>
//               </div>
              
//               <div className="space-y-1">
//                 {clients.map((client, index) => (
//                   <div key={index} className="text-gray-300 text-sm">
//                     {client}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Section */}
//       <div className="border-t border-gray-700 px-6 py-4  h-28">
//         <div className="max-w-7xl mx-auto flex justify-between items-center">
//           <div className="flex space-x-6 text-xs text-gray-400">
//             <a href="#" className="hover:text-white underline">Email</a>
//             <a href="#" className="hover:text-white underline">Resume</a>
//             <a href="#" className="hover:text-white underline">LinkedIn</a>
//             <a href="#" className="hover:text-white underline">Instagram</a>
//             <a href="#" className="hover:text-white underline">Behance</a>
//             <a href="#" className="hover:text-white underline">Youtube</a>
//           </div>
          
//           <div className="text-gray-500 text-xs">
//             © 2021 Sean Lin
//           </div>
//         </div>
//       </div>


//     </div>
//   );
// }




import React from 'react';

export default function Footer() {
  const projects = [
    "A closed loop food delivery service piloted in China that reduces single use plastic while creating a new clean source for recycled resin",
    "A streamlined chatbot underwriting experience for agents to obtain insurance products more conveniently and seamlessly",
    "A new loyalty program for business owners that supports smoother business operations and provides opportunities for growth",
    "An insights dashboard that analyzes employee well-being to help businesses better understand their workforce efficiency and performance", 
    "A personalized wealth management experience that helps clients achieve their life goals while reassuring their financial future",
    "A volunteer platform that provides NPOs and Volunteers with an one-stop-shop to connect, take action and track impact"
  ];

  const clients = [
    "Andover Companies",
    "Apple", 
    "AT&T",
    "AXA XL",
    "City of Fall River",
    "Edward Jones",
    "ExxonMobil",
    "Food Bank for NYC",
    "Goldman Sachs",
    "Gordon Food Service",
    "Lincoln Financial Group",
    "LDS Church",
    "Thrivent Financial",
    "Sewanee University",
    "State of Kentucky"
  ];

  return (
    <div className="bg-[#000927] text-white min-h-screen flex flex-col">
      {/* Main Content */}
      <div className="flex-1 px-6">
        <div className="max-w-7xl mx-auto h-full">
          <div className="flex flex-col md:flex-row h-full">
            
            {/* Left Section - Professional Projects */}
            <div className="flex-1 md:pr-8 py-8">
              <div className="mb-8">
                <h1 className="text-2xl mb-4">Professional Projects</h1>
                <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                  NDAs are the death of me, but here's a peek at some projects I've been working on at work
                </p>
              </div>

              {/* Projects Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 h-auto max-w-md">
                {projects.map((project, index) => (
                  <div key={index} className="text-gray-300 text-xs sm:text-sm leading-snug">
                    {project}
                  </div>
                ))}
              </div>
            </div>

            {/* Divider - hidden on small screens */}
            <div className="hidden md:block w-[2px] bg-gray-300 mx-8"></div>

            {/* Right Section - Selected Clients */}
            <div className="w-full md:w-80 md:pl-8 py-8">
              <div className="mb-8">
                <h2 className="text-gray-400 text-sm leading-tight">
                  Selected<br />Clients
                </h2>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-1 gap-2">
                {clients.map((client, index) => (
                  <div key={index} className="text-gray-300 text-sm">
                    {client}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700    px-1 md:px-6 py-4 h-28">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <div className="flex flex-wrap justify-center sm:justify-start space-x-2 md:space-x-4 text-xs leading-snug text-gray-400">
            <a href="#" className="hover:text-white underline">Email</a>
            <a href="#" className="hover:text-white underline">Resume</a>
            <a href="#" className="hover:text-white underline">LinkedIn</a>
            <a href="#" className="hover:text-white underline">Instagram</a>
            <a href="#" className="hover:text-white underline">Behance</a>
            <a href="#" className="hover:text-white underline">Youtube</a>
          </div>
          
          <div className="text-gray-500 text-xs">
            © 2021 Sean Lin
          </div>
        </div>
      </div>
    </div>
  );
}

