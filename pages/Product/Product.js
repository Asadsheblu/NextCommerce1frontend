import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFire } from 'react-icons/fa';
import Marketing from '../Marketing';
const Product = () => {
    const [serach,setSerach]=useState([])
    const[product,setProduct]=useState([])
   
    useEffect(()=>{
        fetch('http://localhost:5000/product')
        .then(res=>res.json())
        .then(data=>{
            setProduct(data)
           
        })
    },[])
//     const data=product
//    let bonusVal = data[Math.floor(Math.random())];

//    console.log(bonusVal);
    return (
        <div className='container'>
           
              <div className='ms-auto w-25 pt-3'>
                
            
              {/* <label for="exampleFormControlInput1">Product Title</label>
    <select name="title" className="form-control w-75"  onChange={(e)=>{setSerach(e.target.value)}}>
    <option value="">Category</option>
    <option value="Other Snacks">Other Snacks</option>
    <option value="Toilet Paper">Toilet Paper</option>
    <option value="Bath & Body Accessories">Bath & Body Accessories</option>
    <option value="Mineral Water">Mineral Water</option>
    <option value="Mobiles">Mobiles</option>
    <option value="Herbs & Spices">Herbs & Spices</option>
    <option value="Washing Powder">Washing Powder</option>
    <option value="Fabric Upholstery">Fabric Upholstery</option>
   
  </select>
               */}
             
      </div>
           
                               <div className='container mt-5 mb-5 shadow bg-white p-2'>
                              

                               <h6>Trending Product <FaFire className='text-danger'/> </h6>
                               <div class="card-group">
            {
                product
                // .filter((data)=>{
                //     if(serach==""){
                //       return data
                //     }
                //     else if(data.category ? data.category.toLowerCase().includes(serach.toLowerCase()):""){
                //       return data
                //     }
                //   })
                //person.gender ? person.gender.toLowerCase() 
                
                
                .slice(0,6).map(products=>(
                    
                <>
                     
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
                       
                            </>))
            }
             </div>
             <div className='text-center'>
             <Link class="nav-link" href="/Product/allproduct">Lode More Products</Link>
           
             </div>
             
                    </div>
        </div>
    );
};

export default Product;