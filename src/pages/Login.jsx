import React from 'react'
import { NavLink } from 'react-router-dom'

const Login = () => {
    return (
        <div className="login">
         <div className="login_inner shadow">
             <div className="user"><i className="fas fa-user"></i></div>
             <form>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Username</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter username"/>
                
              </div>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter password"/>
                
              </div>
              <div className="remember_forgot">
              <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                <label className="form-check-label" for="exampleCheck1">Remember Me</label>
              </div>
              <div className="forgot"><NavLink to="#"> Forgot Password</NavLink> </div>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            
            <hr/>
            <div className="login-using-network">
              <NavLink to="#">Email<i className="fas fa-envelope"></i></NavLink>
              <NavLink to="#">Google <i className="fab fa-google"></i></NavLink>
            </div>
            <hr/>
            <div className="crate-ac"><NavLink to="/createAccount">Create an Account</NavLink></div>
         </div>   
        </div>
    )
}

export default Login;
