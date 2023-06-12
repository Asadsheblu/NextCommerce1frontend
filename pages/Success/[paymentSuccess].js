import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { FaCheckCircle, FaQuoteRight } from 'react-icons/fa';

const PaymentSuccess = () => {
    const router=useRouter()
    const trandId=router.query.trandId
    console.log(trandId);
    // console.log(trandId);
    const [details,setDetails]=useState({})
    useEffect(()=>{
        fetch(`http://localhost:5000/order/${trandId}`)
        .then(res=>res.json())
        .then(data=>console.log(data))
    },[])
    return (
        <div className='container'>
            <div className='container text-center shadow rounded bg-white w-50 p-4 mt-5'>
                    <FaCheckCircle className='text-success fs-3'/>
                    <h6 className='text-success pt-2 fw-bold'>Payment Successful</h6>
                    <p>Transication Number: {trandId}</p>
            </div>
        </div>
    );
};

export default PaymentSuccess;