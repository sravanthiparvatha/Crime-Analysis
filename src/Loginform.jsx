import React from 'react';
class Loginform extends React.Component{
    render()
    {
        return( 
            <form   autoComplete="on"> 
            <br></br>
                            <h1><u>Log in</u></h1> 
                            <br></br>
                            <p> 
                                <label htmlFor="username" className="uname" >User Name or  Email id   &emsp; &nbsp; &emsp;&emsp; &nbsp;</label>
                                <input id="username" name="username" required="required" type="text" placeholder="Enter username or email"/>&emsp; 
                            </p>
                            <p className="keeplogin"> 
                            
                                <label htmlFor="password" className="youpasswd"> Password&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; &emsp;&emsp;&emsp; &nbsp; </label>
                                <input id="password" name="password" required="required" type="password" placeholder="Enter password" /> 
                                &emsp; &nbsp;
                        
              <input type="checkbox" name="loginkeeping" id="loginkeeping" value="loginkeeping" /> 
              <label htmlFor="loginkeeping">&emsp;Keep me logged in</label>
            </p>
                            
                            <p className="change_link">
              Not a member yet ?&emsp; &nbsp;
              <a href="r" className="to_register">Join us</a>
            </p>
                        </form>
        );

    }
}
export default Loginform;