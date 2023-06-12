import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFire } from 'react-icons/fa';
import Marketing from '../Marketing';
const Product = () => {
    const [serach,setSerach]=useState([])
    const[product,setProduct]=useState([])
   
    useEffect(()=>{
        fetch('https://nextcommerce1backend.onrender.com/product')
        .then(res=>res.json())
        .then(data=>{
            setProduct(data)
           
        })
    },[])

    return (
        <div className='container'>
           
              <div className='ms-auto w-25 pt-3'>
                
            
              
             
      </div>
           
                               <div className='container mt-5 mb-5 shadow bg-white p-2'>
                              

                               <h6> Product </h6>
                               <div className="card-group">
            {
                product
               
                
                
                .slice(0,6).map(products=>(
                    
                <>
                     
                         <div className="card" key={products?._id}>
    <img src={products?.img} className="card-img-top" alt="..."/>
    <div className="card-body">
      <small className="card-title">{products?.name}</small>
    
    </div>
    <h6 className='fw-bold ps-2'>{products?.price}<span className='fs-3'>৳</span></h6>
    <div class="card-footer">
    <button className='btn btn-info w-100'><Link href={'/Product/'+ products?._id} key={products?._id}>Details</Link></button>
    </div>
  </div>
                       
                            </>))
            }
             </div>
             <div className='text-center'>
             <Link className="nav-link" href="/Product/allproduct">Lode More Products</Link>
           
             </div>
             
                    </div>
        </div>
    );
};

export default Product;