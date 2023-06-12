import { useSession } from 'next-auth/react';
import { signIn,signOut } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { FaBeer, FaShoppingCart } from "react-icons/fa";
import logo from "../public/feri.png"
import Image from 'next/image';
const Nav = () => {
  return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" href="/"><Image src={logo} width={50}/></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" href="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" href="/Product/allproduct">Product</Link>
          
        </li>
        {/* <li className="nav-item">
          <Link className="nav-link" href="/admin/Admin">Admin</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Admin
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" href="/admin/Admin">ProductAdd</Link></li>
            <li><Link className="dropdown-item" href="/admin/AllOrder">Order</Link></li>

           
            
          </ul>
        </li> */}
       
      </ul>
      
     
      
    </div>
  </div>
</nav>
        </>
    );
};

export default Nav;