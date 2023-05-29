import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
const Product = () => {
    const[product,setProduct]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/product')
        .then(res=>res.json())
        .then(data=>setProduct(data))
    },[])
  
   
    return (
        <div>
           
                               <div className='container mt-5 mb-5 shadow p-2'>
                               <div class="card-group">
            {
                product.slice(0,6).map(products=>(
                    
                <>
                     
                         <div class="card">
    <img src={products?.img} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h6 class="card-title">{products?.name}</h6>
    
    </div>
    <h6 className='fw-bold ps-2'>{products?.price}<span className='fs-3'>৳</span></h6>
    <div class="card-footer">
    <button className='btn btn-info w-100'><Link href={'/Product/'+ products?._id} key={products?._id}>Details</Link></button>
    </div>
  </div>
                       
                            </>))
            }
             </div>
             {/* <div className='text-center'>
             <button className='btn btn-info w-100'>  <Link class="nav-link" href="/Product/allproduct">Lode More Products</Link></button>
           
             </div> */}
             
                    </div>
        </div>
    );
};

export default Product;