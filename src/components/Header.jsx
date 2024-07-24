import React from "react";
import { Button } from "./ui/button";
import { Download } from "lucide-react";
import { ModeToggle } from "./ModeToggle";

function Header({ DownloadIcon }) {
  return (
    <div className="p-4 shadow-sm border flex justify-between items-center ">
      <div className="flex gap-1 items-center justify-center cursor-pointer ">
        <i className="fa-solid fa-layer-group text-primary mt-[0.2rem]" ></i>
        <h2 className="text-2xl font-bold	">
          <span className="text-primary ">Logo</span>Lab
        </h2>
      </div>
      <div className="flex gap-1">
        <ModeToggle />
        <Button
          className="flex gap-2"
          onClick={() => {
            DownloadIcon(Date.now());
          }}
        >
          <Download className="h-4 w-4" />
          Download
        </Button>
      </div>
    </div>
  );
}

export default Header;
