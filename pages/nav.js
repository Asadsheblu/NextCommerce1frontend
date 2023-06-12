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
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" href="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/Reg/Login">Login</Link>
          
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/admin/Admin">Admin</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Admin
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" href="/admin/Admin">ProductAdd</Link></li>
            <li><Link className="dropdown-item" href="/admin/AllOrder">Order</Link></li>

           
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search"  placeholder="Search" aria-label="Search"/>
       
      </form>
      <button type='button' className='cart-icon' onClick="">
         <FaShoppingCart /> 
         <span className='cart-item-qty'>2</span>
      
       </button>
    </div>
  </div>
</nav>
        </>
    );
};

export default Nav;