"use client"
import Image from 'next/image';
import React, { useState } from 'react'
 import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";


function Certifications() {
   const [open, setOpen] = useState(false);
    const images = [
  "https://www.aclnepal.com/np/wp-content/uploads/2024/07/ISO-Certificate-ACL.png",
  "https://www.aclnepal.com/np/wp-content/uploads/2024/07/ISO-Certificate-ACL.png",
  "https://www.aclnepal.com/np/wp-content/uploads/2024/07/ISO-Certificate-ACL.png",
];
  return (
     <div className="gallery">
      {images.map((img, i) => (
        <div key={i} className="item">
          <Image src={img} alt="" width={300} height={300} onClick={() => setOpen(true)} />
        </div>
      ))}

       

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        
        slides={images.map((img) => ({ src: img }))}
      />
    </div>
  )
}

export default Certifications
