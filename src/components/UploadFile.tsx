"use client";
import { useState } from "react";
import { FileUpload } from "@/components/ui/file-upload";
import axios from "axios";
import { Button } from "./ui/button";
import { toast } from "sonner";
import { motion } from "framer-motion";
import ShinyButton from "./ui/shiny-button";

export function UploadFile() {
  const [file, setFile] = useState<File | null>(null);
  const [data, setData] = useState<string | JSX.Element>("Waiting for response");
  const [value, setValue]= useState<string>("")

 
  const handleFileUpload = (selectedFiles: File[]) => {
    if (selectedFiles.length > 0) {
      setFile(selectedFiles[0]);
    }
  };

  const handleInputChange = async(e:any)=>{
    setValue(e.target.value)
  }

  const handleInputSubmit = async()=>{
    try {
      const res = await axios.post("https://hackathon-backend-hjyn.onrender.com/api/v1/load/ai/api/v1/search/query", {
        search : value
      })
      const serchInfo= res.data.message;
      const formattedData = serchInfo.split("**").map((item:any, index:any) => {
        return (
          <p key={index} className="text-gray-100">
            {item.trim()}
          </p>
        );
      });
      setData(formattedData)
    } catch (error) {
      console.log(error);
      setData(<p className="text-red-500">Error loading data!</p>);
    }
    
  }
  //https://hackathon-backend-hjyn.onrender.com/api/v1/load/ai

  const handleLoad = async () => {
    try {
      const res = await axios.post("https://hackathon-backend-hjyn.onrender.com/api/v1/load/ai");
      console.log(res.data.message);

      const info = res.data.message;
     
      const formattedData = info.split("**").map((item:any, index:any) => {
        return (
          <p key={index} className="text-gray-100">
            {item.trim()}
          </p>
        );
      });

     
      setData(formattedData);
    } catch (error) {
      console.log(error);
      setData(<p className="text-red-500">Error loading data!</p>);
    }
  };

  
  const handleSubmit = async () => {
    if (!file) {
      console.log("No file selected");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    //https://hackathon-backend-hjyn.onrender.com/api/v1/upload/file
    try {
      const res = await axios.post("https://hackathon-backend-hjyn.onrender.com/api/v1/upload/file", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      toast(res.data);
      console.log("Upload successful", res);
    } catch (error) {
      console.error("Error uploading file", error);
    }
  };

  return (
    <div className="flex flex-col md:flex-row w-full pt-4 m-10">
      <div className="mr-0 md:mr-5 w-full min-w-[40vw] mx-auto p-4 md:p-0 flex flex-col gap-5 sm:gap-20">
        <motion.h1 className="text-4xl font-bold bg-gradient-to-tr from-purple-300/80 to-white/90 bg-clip-text text-transparent tracking-normal">
          <div className="alt-heading text-5xl sm:text-3xl md:text-6xl w-full">Upload Your File</div>
        </motion.h1>

        <div className="border border-dashed bg-white dark:bg-transparent border-neutral-200 dark:border-neutral-800 rounded-lg p-4">
          <FileUpload onChange={handleFileUpload} />
          <div className="flex justify-center space-x-4 mt-0">
            <Button className="m-3" onClick={handleSubmit}>
              Submit
            </Button>
            <Button className="m-3" onClick={handleLoad}>
              Load Data
            </Button>
          </div>
        </div>
      </div>

      <div className="w-full min-w-[40vw] max-w-full md:max-w-8xl flex-wrap border border-dashed rounded-lg bg-white dark:bg-transparent border-neutral-200 dark:bg-black dark:opacity-50 shadow-sm p-4 md:p-6">
        <div className=" items-start flex justify-start mb-10 gap-5">
          <input onChange={(e)=>{handleInputChange(e)}}  className="text-white bg-transparent px-2 py-1 text-lg border border-neutral-600 rounded-lg w-full" type="text"  />
          <ShinyButton className="" onClick={handleInputSubmit}>Send</ShinyButton>
        </div>
        <h3 className="text-xl md:text-2xl text-[#e01bff] z-10 pb-3">Analytics & Suggestions</h3>
        
        <div className="w-full text-sm md:text-base text-white">
          {typeof data === "string" ? (
            <p className="text-white z-99">{data}</p> 
          ) : (
            data 
          )}
        </div>
      </div>
    </div>
  );
}
