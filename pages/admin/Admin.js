import React, { useEffect } from 'react';
import {useSession} from "next-auth/react"
import { useRouter } from 'next/router';
const Admin = () => {
//   const {data:session}=useSession()
//   const router=useRouter()
//  useEffect(()=>{
//   if(!session) router.push('/Reg/Login')
//  },[router,session])
  const imageKey="e8ca8a640563b5725a2d73fc6920af02"
  const addProduct=(e)=>{
    e.preventDefault()
    const name=e.target.name.value
    const category=e.target.category.value
    const price=e.target.price.value
    const description=e.target.description.value
    const title=e.target.title.value
    const stock=e.target.stock.value
   
    const image=e.target.image.files[0]
    const data=[name,category,price,description,title,stock,image]

    const formData=new FormData()
    formData.append('image',image)
    const url=`https://api.imgbb.com/1/upload?key=${imageKey}`
    fetch(url,{
      method:"POST",
      body:formData
    })
    .then(res=>res.json())
    .then(data=>{
      if(data.success){
        const img=data.data.url
        console.log(img);
        const upload={
          name:name,
          category:category,
          price:price,
          description:description,
          img:img
        }
      fetch('http://localhost:5000/product',{
        method:"POST",
        headers:{
          "content-type":"application/json"
      },
      body:JSON.stringify(upload)
      })
      .then(res=>res.json())
      .then(data=>{
        if(data.insertedId){
          window.location.reload()
         
          
      }
      })
      }
    })
    
  }
    return (
        <div className='container p-5 shadow bg-dark text-white'>
          <form onSubmit={addProduct}>
  <div className="form-group">
    <label for="exampleFormControlInput1">Product Name</label>
    <input type="text" name='name' className="form-control w-75" id="exampleFormControlInput1"/>
  </div>
  
  <div className="form-group">
  <label for="exampleFormControlInput1">Product Category</label>
      <select name="category" className="form-control w-75" >
      <option value="">Select Category</option>
      <option value="Other Snacks">Other Snacks</option>
      <option value="Casual">Casual</option>
      <option value="Panjabi"> Panjabi </option>
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
  <div className="form-group">
    <label for="exampleFormControlInput1">Product Title</label>
    <select name="title" className="form-control w-75">
    <option value="Trending">Trending</option>
    <option value="Popular">Popular</option>
   
  </select>
  </div>
  
  
  
  <div className="form-group">
    <label for="exampleFormControlInput1">Product Price</label>
    <input type="number" name='price' className="form-control w-75" id="exampleFormControlInput1"/>
  </div>
  <div className="form-group">
    <label for="exampleFormControlInput1">Product Stock</label>
    <input type="number" name='stock' className="form-control w-75" id="exampleFormControlInput1"/>
  </div>
  
  <div className="form-group">
    <label for="exampleFormControlInput1">Product Image</label>
    <input type='file' name='image' className="form-control w-75" id="exampleFormControlInput1"/>
  </div>
 
  

  <div className="form-group">
    <label for="exampleFormControlTextarea1">Product Description</label>
    <textarea className="form-control w-75" name='description' id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
  
  <div className="form-group">
 <button className='btn btn-info fw-bold'>Upload</button>
  </div>
</form>
        </div>
    );
};

export default Admin;