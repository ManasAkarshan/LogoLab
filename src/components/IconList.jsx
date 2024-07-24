import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { icons, Smile } from "lucide-react";
import { iconList } from "@/data/IconList";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function IconList({ setSelectedIcon }) {
  const [openDialog, setOpenDialog] = useState(false);
  const storageValue = JSON.parse(localStorage.getItem("value"));
  const [setIcon, setSetIcon] = useState(
    storageValue ? storageValue?.icon : "Smile"
  );

  const Icon = ({ name, color, size, rotate }) => {
    const LucidIcon = icons[name];
    if (!LucidIcon) {
      return;
    }
    return (
      <LucidIcon
        color={color}
        size={size}
        style={{
          transform: `rotate(${rotate}deg)`,
        }}
      />
    );
  };
  return (
    <div>
      <div>
        <label className="text-xl font-semibold">Icon</label>
        <div
          className="p-3 cursor-pointer bg-gray-300 round w-[45px] h-[45px] my-2 rounded-md flex items-center justify-center"
          onClick={() => {
            setOpenDialog(true);
          }}
        >
          <Icon name={setIcon} color={"#000"} size={25} />
        </div>
      </div>
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="mb-4">Pick Icon</DialogTitle>
            <DialogDescription>
              <Tabs defaultValue="icon" className="w-[400px]">
                <TabsList>
                  <TabsTrigger value="icon">Icons</TabsTrigger>
                  <TabsTrigger value="colorful-icon">
                    Colorful Icons
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="icon">
                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 overflow-auto h-[400px] p-6">
                    {iconList.map((icon, index) => {
                      return (
                        <div
                          key={index}
                          className="border p-3 rounded-sm flex items-center justify-center cursor-pointer"
                          onClick={() => {
                            setSelectedIcon(icon);
                            setOpenDialog(false);
                            setSetIcon(icon);
                          }}
                        >
                          <Icon name={icon} color={document.querySelector('html').classList.contains('dark') ? '#fff' : "#000"} size={20} />
                        </div>
                      );
                    })}
                  </div>
                </TabsContent>
                <TabsContent value="colorful-icon">
                  Coming soon...
                </TabsContent>
              </Tabs>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default IconList;
