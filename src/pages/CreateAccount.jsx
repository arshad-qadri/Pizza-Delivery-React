import React from 'react'
import { NavLink } from 'react-router-dom'

const CreateAccount = () => {
    return (
        <div className="createAccount">
         <div className="createAccount_inner shadow">
             <div className="C-title"><h2>Create Account</h2></div>
             <form className="p-5">
             <div className="name">
             <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">First Name</label>
                <input type="text" className="form-control input-name " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter first name" />
                
              </div>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label input-name">Last Name</label>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter last name"/>
                
              </div>
             </div>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Username</label>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter username"/>
                
              </div>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Email</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Email Id"/>
                
              </div>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Mobile</label>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter mobile number"/>
                
              </div>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter password"/>
                
              </div>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Confirm Password</label>
                <input type="password" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter confirm password"/>
                
              </div>
              
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            
            <hr/>
            
            <div className="crate-ac"><NavLink to="/login">Already have an Account ? </NavLink></div>
         </div>   
        </div>
    )
}

export default CreateAccount;
