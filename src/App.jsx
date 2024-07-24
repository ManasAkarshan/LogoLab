import { useState } from "react";
import BackgroundController from "./components/BackgroundController";
import Header from "./components/Header";
import IconController from "./components/IconController";
import SideNavBar from "./components/SideNavBar";
import LogoPreview from "./components/LogoPreview";
import { UpdateStorageContext } from "./context/UpdateStorageContext";
import Upgrade from "./components/Upgrade";

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [updateStorage, setUpdateStorage] = useState();
  const [downloadIcon, setDownloadIcon] = useState();
  return (
    <UpdateStorageContext.Provider value={{ updateStorage, setUpdateStorage }}>
      <Header DownloadIcon={setDownloadIcon} />
      <div className="flex max-md:flex-col">
        <div className="basis-1/6 pr-8 max-md:pr-0 ">
          <SideNavBar setSelectedIndex={setSelectedIndex} />
        </div>
        <div className="basis-5/6 grid grid-cols-1 md:grid-cols-6 ">
          <div className="md:col-span-2 p-5 shadow-sm overflow-auto">
            {selectedIndex === 0 && <IconController />}
            {selectedIndex === 1 && <BackgroundController />}
          </div>
          {selectedIndex !== 2 && (
            <div className="md:col-span-4 p-2 pl-6 flex justify-center items-center mt-[74px] max-md:pl-2">
              <LogoPreview
                downloadIcon={downloadIcon}
                setDownloadIcon={setDownloadIcon}
              />
            </div>
          )}
          {selectedIndex === 2 && <Upgrade />}
        </div>
      </div>
    </UpdateStorageContext.Provider>
  );
}

export default App;
