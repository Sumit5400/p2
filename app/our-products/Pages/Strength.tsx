"use client"
import React from 'react'

function Strength() {
    let element=[
        {
            id:1,
            image:"https://www.aclnepal.com/np/wp-content/uploads/2023/12/Quality-Consistency.png",
            title:"Quality Consistency",
        },
        {
            id:2,
            image:"https://www.aclnepal.com/np/wp-content/uploads/2023/12/Quality-Consistency.png",
            title:"Quality Consistency",
        },
        {
            id:3,
            image:"https://www.aclnepal.com/np/wp-content/uploads/2023/12/Quality-Consistency.png",
            title:"Quality Consistency",
        },
        {
            id:4,
            image:"https://www.aclnepal.com/np/wp-content/uploads/2023/12/Quality-Consistency.png",
            title:"Quality Consistency",
        },
        {
            id:5,
            image:"https://www.aclnepal.com/np/wp-content/uploads/2023/12/Quality-Consistency.png",
            title:"Quality Consistency",
        },
        {
            id:6,
            image:"https://www.aclnepal.com/np/wp-content/uploads/2023/12/Quality-Consistency.png",
            title:"Quality Consistency",
        },
        {
            id:7,
            image:"https://www.aclnepal.com/np/wp-content/uploads/2023/12/Quality-Consistency.png",
            title:"Quality Consistency",
        },
        {
            id:8,
            image:"https://www.aclnepal.com/np/wp-content/uploads/2023/12/Quality-Consistency.png",
            title:"Quality Consistency",
        },
    ]
  return (
    <>
    <section className='bg-body-secondary'>
        <div className="container pt-4">
        <h6 className='prod-title2'>Our Core Strength</h6>
        <h2 className='text-center text-primary'>Unrivaled Strength: Quality, Innovation, Reliability.</h2>
        </div>
        <div className="container my-4 mt-4">
  <div className="row">
    {element.map((item) => (
      <div key={item.id} className="col-6 col-md-3 text-center mb-4">

        {/* Circle Box */}
        <div
          className="d-flex justify-content-center align-items-center mx-auto mb-2 flip"
          style={{
            width: "120px",
            height: "120px",
            borderRadius: "50%",
            backgroundColor: "#0d6efd", // Bootstrap blue
            overflow: "hidden",
          }}
        >
          <img
            src={item.image}
            alt={item.title}
            style={{
              width: "40%",
              height: "40%",
              objectFit: "cover",
            }}
          />
        </div>

        <h6 className="mt-2">{item.title}</h6>
      </div>
    ))}
  </div>
</div>
<div className='w-100'>
<iframe className='w-100' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3532.862640061827!2d85.321051!3d27.690640000000002!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1959f826d6d1%3A0x67b33b26d318423e!2sArghakhanchi%20Cement%20Limited!5e0!3m2!1sne!2snp!4v1765176497517!5m2!1sne!2snp" width="600" height="450"  loading="lazy"></iframe>
</div>
    </section>
    </>
  )
}

export default Strength