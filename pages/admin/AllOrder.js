import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Allorder = () => {
    const [orders,setOrders]=useState([])
    useEffect(()=>{
        fetch('https://nextcommerce1backend.onrender.com/order')
        .then(res=>res.json())
        .then(result=>setOrders(result))
    },[setOrders])
    return (
        <div className='container'>
            <table class="table">
  <thead>
    <tr>
      <th scope="col">Product Name</th>
      <th scope="col">TransicationId</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  

            {
                orders.map(order=><>
                <tbody>
    <tr>
     
      <td><small>{order?.product?.name}</small></td>
      <td><small>{order?.TransicationId}</small></td>
      <td><Link href={'/admin/'+ order?._id}>Details</Link></td>
    </tr>
    
  </tbody>
                
                </>)
            }
          </table>
                {/* {
                    orders.paymentStatus
                }    
     
            {
                orders.map(order=>{
                    <h3>{order.paymentStatus}</h3>
                    console.log(order.paymentStatus);
                })
                
            } */}
              
     
                  
   
            
  
    
 
        </div>
    );
};

export default Allorder;