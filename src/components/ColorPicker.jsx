import React, { useEffect, useState } from "react";
import ColorPicker from "react-best-gradient-color-picker";

const MyColorPicker = ({ hideControls = false, setColor, pageType }) => {
  const [myColor, setMyColor] = useState("");
  const [width, setWidth] = useState(window.innerWidth);

  useState(() => {
    const localData = JSON.parse(localStorage.getItem("value"));
    if (localData) {
      pageType === "bg"
        ? setMyColor(localData.bgColor ? localData.bgColor: '#d1d5db' )
        : setMyColor(localData.iconColor);
    }
    else{
      pageType === "bg"
       ? setMyColor('#d1d5db')
       : setMyColor("#8338ec")
    }
  },);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      console.log("Window resized");
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="p-2 bg-black">
      <ColorPicker
        className={"rounded-lg "}
        value={myColor}
        onChange={(e) => {
          setMyColor(e);
          setColor(e);
        }}
        hideColorGuide={true}
        hideControls={hideControls}
        hidEyeDrop={true}
        hideAdvanceSlider={true}
        hideInputType={true}
        width={width > 1300 ? 350 : 270}
        // hidePresets={true}
      />
    </div>
  );
};

export default MyColorPicker;
