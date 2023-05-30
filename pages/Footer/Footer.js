import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='container-fluid bg-dark text-white mt-3'>
            <div className='container'>
                <div className='row p-4'>
                    <div className='col-md-3'>
                        <h5>FERI</h5>
                        <small>Largest product search engine, maximum categorized online shopping 
                            mall and quickest home delivery system.</small>
                            <h6>Follow Us</h6>
                            <div className='d-flex'>
                          
                                <FaFacebook className='fs-3 text-white pe-2 '/>
                                <FaInstagram className='fs-3 text-white pe-2'/>
                                <FaYoutube className='fs-3 text-white pe-2'/>
                                <FaLinkedin className='fs-3 text-white pe-2'/>
                            </div>
                    </div>
                    <div className='col-md-3 pt-3'>
                            <h6>Contact Us</h6>
                            <small>House #8, Road # 14,Dhanmondi, Dhaka-1209.</small>
                            <p>Email: support@feri.com</p>
                    </div>
                    <div className='col-md-3 pt-3'>
                        <h6>Let Us Help You</h6>
                       <small>
                       <Link href="/acc">Your Account</Link>
                        <br/>
                        <Link href="/order">Your Order</Link>
                        <br/>
                        <Link href="/pp">Privacy policy</Link>
                        <br/>
                        <Link href="/faq">FAQ</Link>
                       </small>
                    </div>
                    <div className='col-md-3'>
                        <h5 className='pt-5 fw-bold'>Get FERI App</h5>
                    </div>


                </div>

            </div>
            <hr className='text-white'/>
           <div className='text-center p-2'>
           <small className='text-center'>&copy; 2023 Feri.com Limited. All rights reserved.</small>
           </div>
        </div>
    );
};

export default Footer;