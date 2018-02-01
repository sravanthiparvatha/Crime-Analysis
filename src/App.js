import React, { Component } from 'react';
import Loginform from './Loginform';
import Registerform from './Registerform';
import './App.css';
import Header from './Header';
import SlideImages from './SlideImages';




class App extends Component {
 
  render() {
    return (
      <div className="container">
      <Header>
        </Header>
        <section>		
         	
            <div >
              <SlideImages>
                </SlideImages>
               <div id="wrapper">
                    <div id="register" className="animate form">
                        <Registerform handleRegister={this.handleSubmit}>
                            </Registerform>
                    </div>
        
                </div>
                <div>
                  <Loginform handleRegister={this.handleSubmit}>
                  </Loginform>
                  </div>
            </div>  
        </section>
      </div>
    );
  }
}

export default App;
