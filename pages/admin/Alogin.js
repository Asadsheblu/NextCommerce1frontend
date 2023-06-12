import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const Alogin = () => {
    const router=useRouter()
    const dashboard=(e)=>{
        const email=e.target.email.value
        const pass=e.target.pass.value
        if(email==="admin@gmail.com" && pass==="admin"){
            router.push('/admin/Admin')
        }
    }
    return (
        <div className='container'>
            <form onSubmit={dashboard}>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" name='email' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We will never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" name='pass' class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
            
        </div>
    );
};

export default Alogin;