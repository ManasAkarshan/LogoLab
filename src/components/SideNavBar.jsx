import { Image, PencilRuler, Shield } from "lucide-react";
import React, { useState } from "react";

function SideNavBar({setSelectedIndex}) {
  const menuList = [
    {
      id: 1,
      name: "Icon",
      icon: PencilRuler,
    },
    {
      id: 2,
      name: "Background",
      icon: Image,
    },
    {
      id: 3,
      name: "Upgrade",
      icon: Shield,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0)
  return (
    <div className="max-md:flex max-md:justify-between">
      {menuList.map((item, index) => {
        return (
          <h2
            onClick={()=>{setActiveIndex(index); setSelectedIndex(index)}}
            className={` max-md:justify-center max-md:basis-1/3 p2 text-lg px-7 py-3 my-1 text-gray-500 cursor-pointer hover:bg-primary hover:text-white flex items-center gap-1  max-md:px-12 max-sm:px-3 max-md:mb-3 ${activeIndex === index &&  "bg-primary text-white"}`}
            key={item.id}
          >
            <item.icon className="w-4 "/>
            {item.name}
          </h2>
        );
      })}
    </div>
  );
}

export default SideNavBar;
