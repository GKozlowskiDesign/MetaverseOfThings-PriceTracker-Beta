import React, { useState } from "react";



const Navbar = () => {
  const Navigation = [
    { name: "Home", 
    path: "/",  
    icon: "home-outline", 
    dis: "translate-x-0"},
    { name: "Markets", icon: "cellular-outline",
     dis: "translate-x-16"},
    { name: "Trending", icon: "school-outline", dis: "translate-x-32"},
    { name: "Education", icon: "close-outline", dis: "translate-x-48"},  ];
  const [active, setActive] = useState(0);
  return (
    <div className="bg-transparent px-4 rounded-xl">
      <ul className="flex relative">
        {Navigation.map((menu, i) => ( 
          <li key={i} className="mx-auto pb-4 pt-4">
            <a className="flex flex-col bg-gradient-to-b from-indigo-100 to-gray-900 mx-auto h-16 w-16 pt-5 pb-8  text-center rounded-xl cursor-pointer hover:text-purple-400 border-2 border-gray"  onClick={() => setActive(i)}>
              <span className={`text-xl cursor-pointer duration-500 ${i === active && " text-white"}`}>
             <ion-icon name={menu.icon} >
             </ion-icon>
              </span>
            </a>
          </li>
          
        ))}
      </ul>
    </div>
  );
};

export default Navbar;