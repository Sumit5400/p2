"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import lightGallery from "lightgallery";

// LightGallery core CSS
import "lightgallery/css/lightgallery.css";

function Certifications() {
  const images = [
    "https://www.aclnepal.com/np/wp-content/uploads/2024/07/ISO-Certificate-ACL.png",
    "https://www.aclnepal.com/np/wp-content/uploads/2024/07/ISO-Certificate-ACL.png",
    "https://www.aclnepal.com/np/wp-content/uploads/2024/07/ISO-Certificate-ACL.png",
  ];

  const galleryRef = useRef(null);

  useEffect(() => {
    const instance = lightGallery(galleryRef.current, {
      speed: 500,
    });

    return () => instance.destroy();
  }, []);

  return (
    <div ref={galleryRef} className="gallery d-flex gap-3 flex-wrap">
      {images.map((img, i) => (
        <a key={i} href={img} className="item">
          <Image src={img} alt={`Certificate-${i}`} width={300} height={300} />
        </a>
      ))}
    </div>
  );
}

export default Certifications;
