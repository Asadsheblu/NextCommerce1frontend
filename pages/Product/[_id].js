import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const Details = () => {
    const router=useRouter()
    const productId=router.query._id
    console.log(productId);
    const pay=(e)=>{
      e.preventDefault()
      const name=e.target.name.value
      const email=e.target.email.value
      const post=e.target.post.value
      const address=e.target.address.value
      const phone=e.target.number.value
      const data={name,email,post,address,phone}
    
      data.productId=router.query._id
      fetch('https://nextcommerce1backend.onrender.com/order',{
        method:"POST",
        headers:{
          "content-type":"application/json"
      },
      body:JSON.stringify(data)
      })
      .then(res=>res.json())
      .then(result=>{
        window.location.replace(result?.url)
        console.log(result);
      })
    }
    const [details,setDetails]=useState({})
    useEffect(()=>{
        fetch(`https://nextcommerce1backend.onrender.com/product/${productId}`)
        .then(res=>res.json())
        .then(data=>setDetails(data))
    },[])
    
    return (
        <div className='container'>
     
    
     
      <div class="card shadow rounded p-4 mx-auto mt-5 w-75">
  <div class="row g-0">
    <div class="col-md-5">
      <img src={details.img}class="img-fluid rounded-start" alt="T-shirt"/>
    
    </div>
    <div class="col-md-6 pt-3 ps-3">
      <div class="card-body">
        <h6 class="card-title"><span className='text-danger'>Product Name</span>: {details.name}</h6>
        <h6 class="card-title"><span className='text-danger'>Product Category</span>: {details.category}</h6>
        <h6 class="card-title"><span className='text-danger'>Product Price</span>: {details.price}<span className='fs-3'>৳</span></h6>
        <p class="card-text"><span className='fw-bold text-danger'>Details</span>:{details.description}</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        <button className='btn btn-primary rounded shadow'> Order Now</button>
      </div>
    </div>
  </div>
</div>
<form onSubmit={pay} className='mx-auto shadow p-5'>
  <div className="form-group">
    <label for="exampleFormControlInput1">Your Name</label>
    <input type="name" name='name' className="form-control w-75" id="exampleFormControlInput1"/>
  </div>
  
  <div className="form-group">
    <label for="exampleFormControlInput1">Your Email</label>
    <input type="email" name='email' className="form-control w-75" id="exampleFormControlInput1"/>
  </div>
  
  <div className="form-group">
    <label for="exampleFormControlInput1">Postal Code</label>
    <input type="number" name='post' className="form-control w-75" id="exampleFormControlInput1"/>
  </div>
  <div className="form-group">
    <label for="exampleFormControlInput1">Address</label>
    <input type="text" name='address' className="form-control w-75" id="exampleFormControlInput1"/>
  </div>
  
  <div className="form-group">
    <label for="exampleFormControlInput1">Phone Number</label>
    <input type="number" name='number' className="form-control w-75" id="exampleFormControlInput1"/>
  </div>
  
  
  <div className="form-group">
 <button className='btn btn-danger fw-bold'>PAY</button>
  </div>
</form>
           
        </div>
    );
};

export default Details;