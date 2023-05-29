import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const PaymentSuccess = () => {
    const router=useRouter()
    const trandId=router.query.trandId
    console.log(trandId);
    // const [details,setDetails]=useState({})
    // useEffect(()=>{
    //     fetch(`http://localhost:5000/order/${trandId}`)
    //     .then(res=>res.json())
    //     .then(data=>console.log(data))
    // },[])
    return (
        <div>
            <h1>Your Payment Done </h1>
        </div>
    );
};

export default PaymentSuccess;