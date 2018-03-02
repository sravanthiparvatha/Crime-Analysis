import React from 'react';
import request from 'superagent';
class Registerform extends React.Component{
   
        constructor(props) {
            super(props);
    
            this.state = {
                name: "",
                email: "",
                password: "",
                confirmPassword: "",
            };
            this.handleSubmit = this.handleSubmit.bind(this);
            this.handleNameChange = this.handleNameChange.bind(this);
            this.handleEmailChange = this.handleEmailChange.bind(this);
            this.handlePasswordChange = this.handlePasswordChange.bind(this);
            this.handleConfirmPasswordChange = this.handleConfirmPasswordChange.bind(this);
        }
    
        handleSubmit(event) {
    
            event.preventDefault();
    
            this.setState({ value: event.target.value });
    
            var name = document.getElementById('name').value;
            var email = document.getElementById('email').value;
            var password = document.getElementById('password').value;
            var confirmPassword = document.getElementById('confirmPassword').value;
    
            if (password === confirmPassword) {
    
                request
                    .post("http://localhost:9000/login")
                    .send({ name: name, email: email, password: password })
                    .then(
                    (response) => {
                        // response.body will be the returned data from your play app, which is an array of objects
                        // I kept the data as object with "place" as the key, and [lat,longs] as value.
                        // following code converts array of objects into the format which my component is accepting.
                        console.log("response is ok");
                    });
            }
            else {
                //	console.log("nope");
                alert("Password and confirm password are not matching");
            }
    
        }
    
        handleNameChange(event) {
            this.setState({
                name: event.target.value,
            });
            var name = document.getElementById("name");
            name.addEventListener("input", function (event) {
    
                if (name.validity.patternMismatch) {
                    name.setCustomValidity("Username must contain only alphabets and numbers!");
                }
                else {
                    name.setCustomValidity("");
                }
            });
    
        }
    
        handleEmailChange(event) {
            this.setState({
                email: event.target.value,
            });
            var email = document.getElementById("email");
            email.addEventListener("input", function (event) {
                if (email.validity.typeMismatch) {
                    email.setCustomValidity("I expect an e-mail, darling!");
                } else {
                    email.setCustomValidity("");
                }
            });
        }
    
        handlePasswordChange(event) {
            this.setState({
                password: event.target.value,
    
            });
    
    
        }
    
        handleConfirmPasswordChange(event) {
            this.setState({
                confirmPassword: event.target.value,
    
            });
    
        }
    
    
    
    
        render() {
            return (
                <div id="register" className="main-agileinfo slider ">
                    <div className="items-group">
                        <div className="item agileits-w3layouts">
                            <div className="block text main-agileits">
                                <span className="circleLight"></span>
    
                                <div className="login-form loginw3-agile">
                                    <div className="agile-row">
                                    <br/>
                                    <br/>
                                    <br/>
                                        <h1><u>SIGN UP</u></h1><br></br>
                                        <div className="login-agileits-top">
                                            <form autoComplete="off" onSubmit={this.handleSubmit}>
                                            <p>
                                                User Name &emsp;&emsp;&emsp; &nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                <input type="text"
                                                    className="name"
                                                    id="name"
                                                    pattern="^[A-Za-z0-9_.-@]*$"
                                                    maxLength="12"
                                                    autoFocus
                                                    
                                                    placeholder="Enter username"
                                                    onChange={this.handleNameChange}
                                                    value={this.state.name} required />
                                                    </p>

                                                    <p>
                                                email id &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&emsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                                <input type="email"
                                                    className="email"
                                                    id="email"
                                                    autoFocus
                                                    placeholder="Enter email id"
                                                    onChange={this.handleEmailChange}
                                                    value={this.state.email} required />
                                                    </p>
                                                <p>Password &nbsp;&nbsp;&nbsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                                <input type="password"
                                                    className="password"
                                                    id="password"
                                                    required pattern="^[A-Za-z0-9_.-@]*$"
                                                  // required minLength="6" maxLength="10"
                                                    autoFocus
                                                    placeholder="Enter password"
                                                    onChange={this.handlePasswordChange}
                                                    value={this.state.password} />
                                                    </p>
                                                <p>Confirm Password&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                <input type="password"
                                                    className="confirmPassword"
                                                    id="confirmPassword"
                                                    required pattern="^[A-Za-z0-9_.-@]*$"
                                                   // required minLength="6" maxLength="10"
                                                    autoFocus
                                                    placeholder="Re-enter password"
                                                    onChange={this.handleConfirmPasswordChange}
                                                    value={this.state.confirmPassword} />
                                                      &emsp;&emsp;
                                                      
                                                    
                                                <label className="anim">
                                                
                                            <input type = "checkbox"/>&emsp;
                                            Remember me?
                                                   
                                                </label>  &emsp; 
                                                <br>
                                                </br>
                                                <br></br>
                                                &emsp;&emsp; &emsp;&emsp; &emsp;&emsp; &emsp;&emsp; &emsp;&emsp;
                                                <input type="submit" value="Sign up" />
                                                </p>
                                            </form>
                                            
                                        </div>
                                        <div className="login-agileits-bottom wthree">
                                        <h6>Already a user?&emsp; &nbsp;
                                            <a href="Loginform.jsx"> Login</a></h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    
            );
        }
}
export default Registerform; 