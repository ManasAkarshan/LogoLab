import React, { useContext, useEffect, useState } from "react";
import { Slider } from "@/components/ui/slider";
import MyColorPicker from "./ColorPicker";
import { UpdateStorageContext } from "@/context/UpdateStorageContext";
import IconList from "./IconList";

function IconController() {
  const getStorageValue = () => {
    try {
      return JSON.parse(localStorage.getItem('value')) || {};
    } catch (error) {
      console.error('Error parsing localStorage:', error);
      return {};
    }
  };

  const storageValue = getStorageValue();
  const [size, setSize] = useState(storageValue.iconSize || 200);
  const [rotate, setRotate] = useState(storageValue.iconRotate || 0);
  const [color, setColor] = useState(storageValue.iconColor || "#8338ec");
  const [selectedIcon, setSelectedIcon] = useState(storageValue.icon || "Smile");

  const { updateStorage, setUpdateStorage } = useContext(UpdateStorageContext);

  useEffect(() => {
    const updatedValue = {
      ...getStorageValue(),
      iconSize: size,
      iconColor: color,
      iconRotate: rotate,
      icon: selectedIcon,
    };
    setUpdateStorage(updatedValue);
    localStorage.setItem("value", JSON.stringify(updatedValue));
  }, [size, color, rotate, selectedIcon]);

  return (
    <div>
      <IconList setSelectedIcon={setSelectedIcon} />
      <div>
        <label className="text-xl font-semibold mt-2 p-2 flex justify-between">
          Size<span>{size}px</span>
        </label>
        <Slider
          onValueChange={(e) => setSize(e[0])}
          defaultValue={[size]}
          max={512}
          step={1}
        />
      </div>
      <div className="mt-4">
        <label className="text-xl font-semibold mt-2 p-2 flex justify-between">
          Rotate<span>{rotate} °</span>
        </label>
        <Slider
          onValueChange={(e) => setRotate(e[0])}
          defaultValue={[rotate]}
          max={360}
          step={1}
        />
      </div>
      <div className="mt-4 ">
        <label className="text-xl font-semibold mt-2 p-2 flex justify-between">
          Icon Color
        </label>
        <div className="flex justify-center mt-4">
          <MyColorPicker setColor={setColor} pageType={"icon"} />
        </div>
      </div>
    </div>
  );
}

export default IconController;