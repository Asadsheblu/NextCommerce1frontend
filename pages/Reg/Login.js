import React, { useEffect } from 'react';
import {signIn} from "next-auth/react"
import {useSession} from "next-auth/react"
import { useRouter } from 'next/router';

const Login = () => {
    const {data:session}=useSession()
    const router=useRouter()
    useEffect(()=>{
        if(!session)router.push('/Reg/Login')
        else{
            router.push('/')
        }
    },[session,router])
    return (
        <div className='container text-center'>
            <button onClick={signIn} className='btn btn-danger text-white p-2 shadow'>SignIn</button>
        </div>
    );
};

export default Login;