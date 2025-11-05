import React from 'react'
import { Link } from 'react-router-dom';  

function OpenAccount() {
  return ( 
    <div className='container my-5 py-5'>
      <div className='row text-center'>

        <h1 className='fw-bold mt-4'>Start Your FinEdge Trading Journey</h1>
        <p className='text-muted mt-2'>
          Create your account in minutes and begin trading stocks, derivatives, mutual funds, and more — 
          all on a fast, reliable & modern trading platform.
        </p>

        <Link 
          to="/signup" 
          className='btn btn-primary fs-5 mt-4'
          style={{ width:"240px", borderRadius:"6px", padding:"12px 0", margin:"0 auto" }}
        >
          Create Free Account
        </Link>

      </div>
    </div>
  );
}

export default OpenAccount;
