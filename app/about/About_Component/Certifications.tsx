import Image from 'next/image';
import React from 'react'

function Certifications() {
    const images = [
  "https://www.aclnepal.com/np/wp-content/uploads/2024/07/ISO-Certificate-ACL.png",
  "https://www.aclnepal.com/np/wp-content/uploads/2024/07/ISO-Certificate-ACL.png",
  "https://www.aclnepal.com/np/wp-content/uploads/2024/07/ISO-Certificate-ACL.png",
];
  return (
     <div className="gallery">
      {images.map((img, i) => (
        <div key={i} className="item">
          <Image src={img} alt="" width={300} height={300} />
        </div>
      ))}
    </div>
  )
}

export default Certifications
