import Link from 'next/link';
import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Navbar from '../Pages/Navbar';

function Header() {
  return (
   <>
   <header className="bg-primary">
  <nav className="navbar navbar-expand-lg bg-primary navbar-dark">
    <div className="container  hide-mobile">
      <div>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 p-2">
          <li className="nav-item">
            <Link className="nav-link" href="#"><i className="bi bi-telephone p-2" />Project Sales:
              9857015076</Link>
          </li>
          <li className="nav-item  ">
            <Link className="nav-link" href="#"><i className="bi bi-telephone p-2" />Call for help:
              +977-1-4102188 / +977-1-5357670</Link>
          </li>
          <li className="nav-item ms-4">
            <Link className="nav-link" href="#"><i className="bi bi-envelope p-2" />Mail to us:
              customercare@acplnepal.com</Link>
          </li>
          <li className="nav-item ms-4">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <Link className="nav-link" href="#"><FaFacebook /></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#"><FaYoutube /></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#"><FaInstagram /></Link>
              </li>
            </ul>
          </li></ul></div>
    </div>
  </nav>
  <Navbar/>
</header>

   </>
  )
}

export default Header