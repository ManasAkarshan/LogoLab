import React, { useState, useEffect, useContext } from "react";
import { Slider } from "@/components/ui/slider";
import MyColorPicker from "./ColorPicker";
import { UpdateStorageContext } from "@/context/UpdateStorageContext";

function BackgroundController() {
  const getStorageValue = () => {
    try {
      return JSON.parse(localStorage.getItem('value')) || {};
    } catch (error) {
      console.error('Error parsing localStorage:', error);
      return {};
    }
  };

  const storageValue = getStorageValue();
  const [rounded, setRounded] = useState(storageValue.bgRounded || 0);
  const [padding, setPadding] = useState(storageValue.bgPadding || 10);
  const [color, setColor] = useState(storageValue.bgColor || "#d1d5db");
  const {updateStorage, setUpdateStorage} = useContext(UpdateStorageContext);

  useEffect(() => {
    const updatedValue = {
      ...getStorageValue(),
      bgRounded: rounded,
      bgPadding: padding,
      bgColor: color,
    };
    setUpdateStorage(updatedValue);
    localStorage.setItem('value', JSON.stringify(updatedValue));
  }, [rounded, padding, color]);

  return (
    <div>
      <div className="mt-4">
        <label className="text-xl font-semibold mt-2 p-2 flex justify-between">
          Rounded<span>{rounded}px</span>
        </label>
        <Slider
          onValueChange={(e) => setRounded(e[0])}
          defaultValue={[rounded]}
          max={512}
          step={1}
        />
      </div>
      <div className="mt-4">
        <label className="text-xl font-semibold mt-2 p-2 flex justify-between">
          Padding<span>{padding}px</span>
        </label>
        <Slider
          onValueChange={(e) => setPadding(e[0])}
          defaultValue={[padding]}
          max={100}
          step={1}
        />
      </div>
      <div className="mt-4 ">
        <label className="text-xl font-semibold mt-2 p-2 flex justify-between">Icon Color</label>
        <div className="flex justify-center mt-4">
          <MyColorPicker setColor={setColor} pageType={"bg"}/>
        </div>
      </div>
    </div>
  );
}

export default BackgroundController;