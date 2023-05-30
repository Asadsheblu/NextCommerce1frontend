import { useSession } from 'next-auth/react';
import { signIn,signOut } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { FaBeer, FaShoppingCart } from "react-icons/fa";
const Nav = () => {
  return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-white">
  <div class="container-fluid">
    <Link class="navbar-brand" href="/">FERI</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" href="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" href="/Reg/Login">Login</Link>
          {/* {
        session?<>




        
        <button onClick={signOut} className='btn btn-info me-2'>SignOut</button>
     
        
        </>


        
       
        :
          <button className='btn btn-info me-2'><Link className='text-decoration-none text-white'href="/Reg/Login">SingIn</Link></button>
      }
         */}
        </li>
        <li class="nav-item">
          <Link class="nav-link" href="/admin/Admin">Admin</Link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Admin
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link class="dropdown-item" href="/admin/Admin">ProductAdd</Link></li>
            <li><Link class="dropdown-item" href="/admin/AllOrder">Order</Link></li>

           
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search"  placeholder="Search" aria-label="Search"/>
       
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