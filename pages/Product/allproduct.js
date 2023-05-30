import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaFire } from 'react-icons/fa';

const Allproduct = () => {
     const [serach,setSerach]=useState([])
    const [product,setProducts]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/product')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return (
        <div className='container-fluid bg-light'>
          <div className='container'>

        
           <div className='ms-auto w-25 pt-3 pb-3'>
                
            
                <label for="exampleFormControlInput1">Product Category</label>
      <select name="title" className="form-control w-75"  onChange={(e)=>{setSerach(e.target.value)}}>
      <option value="">Select Category</option>
      <option value="Other Snacks">Other Snacks</option>
      <option value="Casual">Casual</option>
      <option value="T-Shirts">T-Shirts</option>
      <option value="Sarees">Sarees</option>
      <option value="Toilet Paper">Toilet Paper</option>
      <option value="Bath & Body Accessories">Bath & Body Accessories</option>
      <option value="Mineral Water">Mineral Water</option>
      <option value="Mobiles">Mobiles</option>
      <option value="Herbs & Spices">Herbs & Spices</option>
      <option value="Washing Powder">Washing Powder</option>
      <option value="Fabric Upholstery">Fabric Upholstery</option>
     
    </select>
                
               
        </div>
             
             
           <div class="row row-cols-2 row-cols-md-5 g-2">
            {

    product
    .filter((data)=>{
        if(serach==""){
          return data
        }
        else if(data.category ? data.category.toLowerCase().includes(serach.toLowerCase()):""){
          return data
        }
      })
      .map(products=>(
    <>
     <div class="col">
     <div class="card w-100 h-100 rounded" key={products.id}>
    <img src={products?.img} class="card-img-top" alt="..."/>
    <div class="card-body">
      <small class="card-title fw-bold">{products?.name}</small>

      
    </div>
    <div className='card-footerd-flex'>
    <h6 className='fw-bold ps-2'>{products?.price}<span className='fs-3'>৳</span></h6>
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

export default Allproduct;