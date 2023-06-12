import React, { useEffect, useState } from 'react';

const Allorder = () => {
    const [orders,setOrders]=useState([])
    useEffect(()=>{
        fetch('https://nextcommerce1backend.onrender.com/order')
        .then(res=>res.json())
        .then(result=>setOrders(result))
    },[])
    return (
        <div className='container'>
          
                {
                    orders.paymentStatus
                }    
     
            {
                orders.map(order=>{
                    <h3>{order.paymentStatus}</h3>
                    console.log(order.paymentStatus);
                })
                
            }
              
     
                  
   
            
  
    
 
        </div>
    );
};

export default Allorder;