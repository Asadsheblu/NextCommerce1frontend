import React from 'react';
import samsung from "../../public/samsung.jpg"
import grocery from "../../public/grocery.jpg"
import transcom from "../../public/transom.jpg"
import uniliver from "../../public/uniliver.jpg"
import cake from "../../public/Cake.jpg"
import Link from 'next/link';
import Image from 'next/image';
const Psystem = () => {
    return (
        <div className='container'>
            <div className='row p-5'>

            
            <div className='col-md-6 card shadow p-3 mb-5 rounded'>
                <h6>PNP</h6>
                <p>Pick up your order at the nearest PNP store</p>
                <Image src={samsung} className='w-50 w-25'></Image>
                <Link href="/">Samsung Smart Plaza</Link>
            </div>
            <div className='col-md-6 shadow card p-3 mt-5 rounded'>
            <h6>COD</h6>
                <p>Pay cash on delivery</p>
                <div className='row'>
                    <div className='col-md-3'>
                    <Image src={grocery} width={100} className='p-2'></Image>
                    <br/>
                   <h6 className='text-center'><Link href="/"> Grocery</Link></h6> 
                    </div>
                    <div className='col-md-3'>
                        <Image src={uniliver} width={100} className='p-2'></Image>
                        <br/>
                        <h6 className='text-center'><Link href="/"> Uniliver</Link></h6> 
                    </div>
                    <div className='col-md-3'>
                    <Image src={transcom} width={100} className='p-2'></Image>
                        <br/>
                        <h6 className='text-center'><Link href="/"> Transcom</Link></h6> 
                    </div>
                    <div className='col-md-3'>
                    <Image src={cake} width={100} className='p-2'></Image>
                        <br/>
                        <h6 className='text-center'><Link href="/"> DAN Cake</Link></h6> 
                    </div>
                </div>

                    
            </div>
            </div>
        </div>
    );
};

export default Psystem;