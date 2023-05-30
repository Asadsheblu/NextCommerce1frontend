import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaFire } from 'react-icons/fa';

const Allproduct = () => {
    const [products,setProducts]=useState([])
    useEffect(()=>{
        fetch('https://nextcommerce1backend.onrender.com/product')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return (
        <div className='container'>
           
             
           <div class="row row-cols-1 row-cols-md-3 g-2">
            {
products.map(products=>(
    <>
     <div class="col">
     <div class="card" key={products.id}>
    <img src={products?.img} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h6 class="card-title">{products?.name}</h6>
    
    </div>
    <h6 className='fw-bold ps-2'>{products?.price}<span className='fs-3'>৳</span></h6>
    <div class="card-footer">
    <button className='btn btn-info w-100'><Link href={'/Product/'+ products?._id} key={products?._id}>Details</Link></button>
    </div>
  </div>
             </div></>
    
))
            }
{/*           
            {
                products.map(products=>(
                <>
              
           

                        
                        ))
               </>   } */}
            
           
             
                    </div>
        </div>
    );
};

export default Allproduct;