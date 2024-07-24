import React, { useEffect, useState, useContext } from 'react'
import { UpdateStorageContext } from "@/context/UpdateStorageContext";
import { icons } from "lucide-react";
import html2canvas from 'html2canvas';

function LogoPreview({downloadIcon, setDownloadIcon}) {
  const [storageValue, setStorageValue] = useState()
  const {updateStorage, setUpdateStorage} = useContext(UpdateStorageContext)

  useEffect(()=>{
    const storageData = JSON.parse(localStorage.getItem('value'));
    setStorageValue(storageData)
  },[updateStorage])

  useEffect(() => {
    if(downloadIcon){
      downloadPngLogo();
    }
  }, [downloadIcon])

  const downloadPngLogo = ()=>{
    const downloadLogoDiv = document.getElementById("downloadLogoDiv")
    html2canvas(downloadLogoDiv, {
      backgroundColor:null
    }).then(canvas=>{
      const pngImage = canvas.toDataURL('./image/png')
      const downloadLink = document.createElement('a');
      downloadLink.href = pngImage;
      downloadLink.download='logolab.png'
      downloadLink.click();
    })
  }

  const Icon = ({name, color, size, rotate}) => {
    const LucidIcon = icons[name]
    if(!LucidIcon){
      return ;
    }
    return <LucidIcon color={color} size={size} 
    style={{
      transform:`rotate(${rotate}deg)`
    }}
    />
  }

  return (
    <div >
        <div className="2xl:h-[600px] 2xl:w-[600px] h-[500px] w-[500px] max-sm:h-[300px] max-sm:w-[300px] max-md:mb-[74px] max-xl:w-[380px] max-xl:h-[380px] bg-gray-200 outline-dotted outline-gray-300" style={{padding:storageValue?.bgPadding}}>
          <div id='downloadLogoDiv' className="h-full w-full flex justify-center items-center" style={{
            borderRadius:storageValue?.bgRounded,
            background:`${storageValue?.bgColor}`
          }}>
              <Icon name={storageValue?.icon} color={storageValue?.iconColor} size={storageValue?.iconSize} rotate={storageValue?.iconRotate}/>
          </div>
        </div>
    </div>
  )
}

export default LogoPreview