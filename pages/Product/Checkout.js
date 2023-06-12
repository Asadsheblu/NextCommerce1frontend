import { useRouter } from 'next/router';
import React from 'react';

const Checkout = () => {
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
        
      })
    }
    return (
        <div className='container'>
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

export default Checkout;