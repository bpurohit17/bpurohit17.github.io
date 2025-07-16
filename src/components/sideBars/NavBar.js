// import React, { useState } from "react";
// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const navLinks = ["home", "projects", "skills", "experience", "contact"];

//   const handleLinkClick = () => {
//     setMenuOpen(false); // close menu on item click
//   };

//   return (
//     <nav className="fixed top-0 left-0 w-full bg-white shadow z-50">
//       <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-16">
//         <div className="text-xl font-bold text-gray-800">Bhagyashri</div>

//         {/* Hamburger Icon */}
//         <div className="md:hidden">
//           <button
//             onClick={() => setMenuOpen(!menuOpen)}
//             className="text-gray-800"
//           >
//             {menuOpen ? (
//               <XMarkIcon className="w-6 h-6" />
//             ) : (
//               <Bars3Icon className="w-6 h-6" />
//             )}
//           </button>
//         </div>

//         {/* Nav Links */}
//         <ul
//           className={`${
//             menuOpen ? "block" : "hidden"
//           } absolute top-16 left-0 w-full bg-white md:bg-transparent md:static md:flex md:space-x-8 transition-all duration-300 ease-in-out`}
//         >
//           {navLinks.map((link) => (
//             <li key={link} className="text-center md:text-left">
//               <a
//                 href={`#${link}`}
//                 onClick={handleLinkClick}
//                 className="block px-4 py-2 capitalize text-gray-800 hover:text-red-500"
//               >
//                 {link}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
