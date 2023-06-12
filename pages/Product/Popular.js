import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaEbay, FaFire, FaPoo, FaShoppingBasket } from 'react-icons/fa';

const Popular = () => {
  
    const [product,setProducts]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/product')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return (
        <div className='container-fluid bg-light'>
          <div className='container shadow bg-white p-3'>
          <h6>Popular Product <FaShoppingBasket className='text-danger'/> </h6>
             
           <div className="row row-cols-2 row-cols-md-6 g-2">
                              

                              
                              
            {

    product
    .filter((data)=>{
    
        if(data.title==="Popular"){
          return data
        }
        // else if(data.category ? data.category.toLowerCase().includes(serach.toLowerCase()):""){
        //   return data
        // }
      })
      .map(products=>(
    <>
     <div key={products?._id} className="col">
     <div className="card w-100 h-100 rounded" key={products.id}>
      
    <img src={products?.img} className="card-img-top" alt="..."/>
    <div className="card-body">
      <small className="card-title">{products?.name}</small>

      
    </div>
    <div className='card-footerd-flex'>
    <h6 className='fw-bold ps-2'>{products?.price}<span classNameName='fs-3'>৳</span></h6>
    <button className='btn btn-info w-100'><Link href={'/Product/'+ products?._id} key={products?._id}>Details</Link></button>
    </div>
    
    
  </div>
             </div></>
    
))
            }

            
           
</div>
                    </div>
        </div>
    );
};

export default Popular;