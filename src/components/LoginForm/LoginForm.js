import React, {useState} from 'react';
import axios from 'axios';
import './LoginForm.css';
import {API_BASE_URL, ACCESS_TOKEN_NAME} from '../../constants/apiConstants';
import { withRouter } from "react-router-dom";

function LoginForm(props) {
    const [state , setState] = useState({
        email : "",
        password : "",
        successMessage: null
    })
    const handleChange = (e) => {
        const {id , value} = e.target   
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
    }

    const handleSubmitClick = (e) => {

      if(state.password == 'admin' && state.email == 'admin')
      {
        props.history.push('/Admin');
        console.log("HELLO1234")
      }
      else{
        alert("Invalid Credentials\nYou have entered an invalid username or password");
      }
        e.preventDefault();
        // const payload={
        //     "email":state.email,
        //     "password":state.password,
        // }
        // axios.post("API_BASE_URL"+'/user/login', payload)
        //     .then(function (response) {
        //         if(response.status === 200){
        //             setState(prevState => ({
        //                 ...prevState,
        //                 'successMessage' : 'Login successful. Redirecting to home page..'
        //             }))
        //             localStorage.setItem("ACCESS_TOKEN_NAME",response.data.token);
        //             redirectToHome();
        //             props.showError(null)
        //         }
        //         else if(response.code === 204){
        //             props.showError("Username and password do not match");
        //         }
        //         else{
        //             props.showError("Username does not exists");
        //         }
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     });
    }
    // const redirectToHome = () => {
    //     props.updateTitle('Home')
    //     props.history.push('/home');
    // }
   
    return(
        <div className="pagecenter loginForm">
        <form>
          <div className="row">
            <div className="col-sm-3"></div>
            <label htmlFor="username" className="col-sm-2 col-form-label">User Name:</label>
            <div className="col-sm-3 mb-2">
            <input type="email" 
                       className="form-control" 
                       id="email" 
                       aria-describedby="emailHelp" 
                       placeholder="Enter user name" 
                       value={state.email}
                       onChange={handleChange}
                />
              {/* { submitted && errors.username.length > 0 &&  <span className='error'>{errors.username}</span>} */}
            </div>
            <div className="col-sm-4">
            </div>
          </div>
          <div className="row">
            <div className="col-sm-3"></div>
            <label htmlFor="password" className="col-sm-2 col-form-label">Password:</label>
            <div className="col-sm-3 mb-2">
            <input type="password" 
                       className="form-control" 
                       id="password" 
                       placeholder="Password"
                       value={state.password}
                       onChange={handleChange} 
                />
              {/* { submitted && errors.password.length > 0 &&  <span className='error'>{errors.password}</span>} */}
            </div>
            <div className="col-sm-4"></div>
          </div>

          <div className="row">
            <div className="col-sm-12 center mt-1">
              {/* { submitted && loginStatus.length > 0 &&  <span className='error'>{loginStatus}</span>} */}
            </div>
          </div>

          <div className="row">
            <div className="col-sm-12 center mt-2">
                <button
                    type="submit" 
                    className="btn btn-primary"
                    onClick={handleSubmitClick}
                >Login</button>
            </div>
          </div>
        </form>
      </div>





        // <div className="pagecenter loginForm">
        //     <form>
        //     <div className="row">
        //     <div className="col-sm-3"></div>
        //                 <label htmlFor="username" className="col-sm-2 col-form-label">User Name:</label>
        //         <div className="col-sm-3 mb-2">
        //         <input type="email" 
        //                className="form-control" 
        //                id="email" 
        //                aria-describedby="emailHelp" 
        //                placeholder="Enter user name" 
        //                value={state.email}
        //                onChange={handleChange}
        //         />
        //         </div>
        //         <div className="col-sm-4">
        //     </div>
        //         </div>

        //         <div className="row">
        //         <div className="col-sm-3"></div>
        //         <div className="form-group text-left">
        //     <label htmlFor="password" className="col-sm-2 col-form-label">Password:</label>
        //     <div className="col-sm-3 mb-2">
        //         <input type="password" 
        //                className="form-control" 
        //                id="password" 
        //                placeholder="Password"
        //                value={state.password}
        //                onChange={handleChange} 
        //         />
        //                     <div className="col-sm-4"></div>
        //         </div>
        //         </div>
        //         </div>

        //         <div className="form-check">
        //         </div>
        //         <button 
        //             type="submit" 
        //             className="btn btn-primary"
        //             onClick={handleSubmitClick}
        //         >Submit</button>
        //     </form>
        //     <div className="alert alert-success mt-2" style={{display: state.successMessage ? 'block' : 'none' }} role="alert">
        //         {state.successMessage}
        //     </div>
        // </div>
    )
}

export default withRouter(LoginForm);