// import { useRouter } from 'next/router';
// import React, { useEffect, useState } from 'react';

// const SingleOrder = () => {
//     const router=useRouter()
//     const orderId=router.query._id
//     console.log(orderId);
//     const [details,setDetails]=useState({})
//     useEffect(()=>{
//         fetch(`https://nextcommerce1backend.onrender.com/order/${orderId}`)
//         .then(res=>res.json())
//         .then(data=>setDetails(data))
//     },[setDetails])
//     return (
//         <div className='container'>
//             <div class="card-body">
//         <h6 class="card-title"><span className='text-danger'>Product Name</span>: {details?.product?.name}</h6>
//         <h6 class="card-title"><span className='text-danger'>Product Category</span>: {details?.product?.category}</h6>
//         <h6 class="card-title"><span className='text-danger'>Product Price</span>: {details?.product?.price}<span className='fs-3'>৳</span></h6>
//         <p class="card-text"><span className='fw-bold text-danger'>Details</span>:{details?.product?.description}</p>
//         {/* <p class="card-text"><span className='fw-bold text-danger'>Payment</span>:
       
//        {details.paymentStatus? details.paymentStatus:"true"}
//         </p> */}
//         {
            
//         }
       
        
//       </div>
//         </div>
//     );
// };

// export default SingleOrder;

import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';
import { useReactToPrint } from 'react-to-print';


const SingleOrder = () => {
    //routing
    const router=useRouter()
    const orderId=router.query._id
    console.log(orderId);
    //create invoice number
    const getRandomId = (min = 0, max = 500000) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        const num =  Math.floor(Math.random() * (max - min + 1)) + min;
        return num.toString().padStart(6, "0")
      };
      //Create Date
      // const date = new Date([]);
      //create print 
      const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
    const [details,setDetails]=useState({})
    useEffect(()=>{
        fetch(`https://nextcommerce1backend.onrender.com/order/${orderId}`)
        .then(res=>res.json())
        .then(data=>setDetails(data))
    },[setDetails])
    return (
        <div className='container' ref={componentRef}>
          <div class="card">
  <div class="card-body">
    <div class="container mb-5 mt-3">
      <div class="row d-flex align-items-baseline">
        <div class="col-xl-9">
          <p>Invoice  <strong>ID: {getRandomId()}</strong></p>
        </div>
        <div class="col-xl-3 float-end">

          <button onClick={handlePrint} class="btn btn-light text-capitalize border-0" data-mdb-ripple-color="dark"><i
              class=" text-primary"></i> Print</button>
          
        </div>
        <hr/>
      </div>

      <div class="container">
        <div class="col-md-12">
          <div class="text-center">
            <i class="fab fa-mdb fa-4x ms-0"></i>
            <p class="pt-0">FERI E_Commerece</p>
          </div>

        </div>


        <div class="row">
          <div class="col-xl-8">
            <ul class="list-unstyled">
              <li class="text-muted">To: <span>John Lorem</span></li>
              <li class="text-muted">Street, City</li>
              <li class="text-muted">State, Country</li>
              <li class="text-muted"><i class="fas fa-phone"></i> 123-456-789</li>
            </ul>
          </div>
          <div class="col-xl-4">
            <p class="text-muted">Invoice</p>
            <ul class="list-unstyled">
              <li class="text-muted"><i class="fas fa-circle" ></i> <span
                  class="fw-bold">{details?._id}</span></li>
              <li class="text-muted"><i class="fas fa-circle" ></i> <span
                  class="fw-bold">Creation Date: </span>{}</li>
              <li class="text-muted"><i class="fas fa-circle" ></i> <span
                  class="me-1 fw-bold">Status:</span><span class="badge bg-warning text-black fw-bold">
                  {details?.paymentStatus}</span></li>
            </ul>
          </div>
        </div>

        <div class="row my-2 mx-1 justify-content-center">
          <table class="table table-striped table-borderless">
            <thead style={{backgroundColor:"#84B0CA "}} class="text-white">
           
              <tr>
                <th scope="col">#</th>
                <th scope="col">Description</th>
                <th scope="col">Qty</th>
                <th scope="col">Unit Price</th>
                <th scope="col">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>{details?.product?.name}</td>
                <td>{details?.data?.order_qty}</td>
                <td>{details?.product?.price}৳ </td>
                <td>{
                    details?.data?.order_qty*details?.product?.price
                    }৳</td>
              </tr>
            
          
            </tbody>

          </table>
        </div>
        <div class="row">
          <div class="col-xl-8">
            <p class="ms-3">Add additional notes and payment information</p>

          </div>
          <div class="col-xl-3">
            <ul class="list-unstyled">
              <li class="text-muted ms-3"><span class="text-black me-4">SubTotal</span>{
                    details?.data?.order_qty*details?.product?.price
                    }৳</li>
              <li class="text-muted ms-3 mt-2"><span class="text-black me-4">Tax(15%)</span>{
               (15*(details?.data?.order_qty*details?.product?.price/100))
              }</li>
            </ul>
            <p class="text-black float-start"><span class="text-black me-3"> Total Amount</span><span
               style={{fontSize:"19px"}}>{
                
                    details?.data?.order_qty*details?.product?.price+
                    (15*(details?.data?.order_qty*details?.product?.price/100))
                        
                    
            }
               </span></p>
          </div>
        </div>
        <hr/>
        <div class="row">
          <div class="col-xl-10">
            <p>Thank you for your purchase</p>
          </div>
          
        </div>

      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default SingleOrder;