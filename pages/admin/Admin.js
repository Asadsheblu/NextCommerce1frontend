import React from 'react';

const Admin = () => {
  const imageKey="e8ca8a640563b5725a2d73fc6920af02"
  const addProduct=(e)=>{
    e.preventDefault()
    const name=e.target.name.value
    const category=e.target.category.value
    const price=e.target.price.value
    const description=e.target.description.value
    const image=e.target.image.files[0]
    const data=[name,category,price,description,image]
    console.log(data);
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
      fetch('https://nextcommerce1backend.onrender.com/product',{
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
         
          console.log(data);
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
    <input type="text" name='category' className="form-control w-75" id="exampleFormControlInput1"/>
  </div>
  
  <div className="form-group">
    <label for="exampleFormControlInput1">Product Price</label>
    <input type="number" name='price' className="form-control w-75" id="exampleFormControlInput1"/>
  </div>
  
  <div className="form-group">
    <label for="exampleFormControlInput1">Product Image1</label>
    <input type='file' name='image' className="form-control w-75" id="exampleFormControlInput1"/>
  </div>
  <div className="form-group">
    <label for="exampleFormControlInput1">Product Image2</label>
    <input type='file' name='image2' className="form-control w-75" id="exampleFormControlInput1"/>
  </div>
  <div className="form-group">
    <label for="exampleFormControlInput1">Product Image3</label>
    <input type='file' name='image3' className="form-control w-75" id="exampleFormControlInput1"/>
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