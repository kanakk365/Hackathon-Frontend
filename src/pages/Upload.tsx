import { FileUpload } from '@/components/ui/file-upload'
import React from 'react'
import { UploadFile  } from '@/components/UploadFile'
import {GridPattern} from '@/components/ui/file-upload'
import { Button } from '@/components/ui/button'
function Upload() {
  return <>
  <div className="h-full sm:mt-10 mt-9 min-h-[46rem] xl:min-h-[94.9vh] mx-auto overflow-hidden">
    <div className="flex overflow-hidden justify-center">
      {/* Optional Heading */}
      {/* <h1 className="mt-10 md:text-2xl lg:text-6xl pb-4 mb-20">Upload Your Engagement Data</h1> */}
    </div>
    <div className="flex justify-center px-4 md:px-8 lg:px-16">
      <UploadFile />
    </div>
  </div>

  {/* Footer Section */}
  {/* Uncomment and customize as needed */}
  {/* 
  <div className="text-gray-400 text-center mt-10">
    © 2025 Hackathon All rights reserved. Built by{" "}
    <Button className="p-0" variant="link">
      <a className="text-gray-400" href="https://github.com/kanakk365">
        Kanak
      </a>
    </Button>
    <Button className="p-0" variant="link">
      <a className="text-gray-400" href="https://github.com/tanuj8124">
        Tanuj
      </a>
    </Button>
  </div>
  */}
</>

}

export default Upload