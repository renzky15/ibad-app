import React, { Component } from 'react'
import sample from '../img/sample.jpg';
import axios from 'axios';

export default class Login extends Component {
state = {
    visibility: false
};

toggleVisibilitity =(prevState) => {
    this.setState({
        visibility: !this.state.visibility,
        email:'',
        password:''
    })
};
handleInputChange = (event) => {
    event.preventDefault();
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
    
  };

handleLogin = (e) => {
    e.preventDefault()
    const target = e.target;
    // const inputField = document.querySelectorAll('input');
    let status = undefined
    
    const email =this.state.email;
    const password =this.state.password;
    

    // let form =  new FormData();
    // form.append('email', this.state.mailTo);
    axios.post('https://ibad-api.herokuapp.com/api/Employer/login.php', {
        email,password
        
    })
    .then(res  => {
        
        status = res.data.data_return[0].message;
    //    const data= JSON.parse({returnData})
    //    console.log(res.data.data_return[0].message)
        
        this.setState({
            status
          },() => {
              console.log(this.state.status, 'status1');

              if (this.state.status==='Login Success.') {
                  this.props.history.push('/employer')
              }else{
                this.props.history.push('/login')
              }
          });
    })
    
    
      
        
};
    render() {
        const wrapStyle = {
            // backgroundImage:'url('+sample+')',
            // background: '#f5f2d0',
            // height: '700',
            // width:'100%'yar
        };
        const big_btn = {
            'background': 'purple',
            'border': 'none',
            'border-bottom': '10px solid #301934',
            'color': 'white',
            'font-weight': 'bold',
            'font-size': '32px',
            'font-family':'Helvetica,Arial,Sans-seriff',
            'width': '100%',
            'margin-bottom': '1.5rem',
            'padding': '2.4rem'
        }
        return (
            <div className="container">
            <div className="login-container" style={wrapStyle}>
                <div className="login-box">
                    <div className="login-logo">
                        <a href="url-here"><b>IBAD</b> | Job Portal</a>
                        <h2>Login as:</h2>
                    </div>
                    
                    <div className="login-box-body" style={wrapStyle}>
                       <a href="#loginForm"><button onClick = {this.toggleVisibilitity} className = "btn btn-primary" style={big_btn}>Employer</button></a> 
                        <button className = "btn btn-primary" style={big_btn}>Applicant</button>
                    </div>
                       
                    {/* /.login-box-body */}

                   
                </div>


            </div>

            <br/>
            <br/>
            

            {/* Show form */}
             {this.state.visibility && (
                <div id="loginForm" className = "login-container">
                <div className="login-box">
                    <div className="login-logo">
                        <a href="url-here"><b>IBAD</b> | Employer</a>
                    </div>
                    {/* /.login-logo */}
                    <div className="login-box-body">
                        <p className="login-box-msg">Sign in to start your session</p>
                        <form method ="POST">
                            <div className="form-group has-feedback">
                                <input type="email" name="email" onChange={this.handleInputChange} className="form-control" placeholder="Email" />
                                <span className="glyphicon glyphicon-envelope form-control-feedback" />
                            </div>
                            <div className="form-group has-feedback">
                                <input type="password" name = "password" onChange={this.handleInputChange} className="form-control" placeholder="Password" />
                                <span className="glyphicon glyphicon-lock form-control-feedback" />
                            </div>
                            <div className="row">
                                <div className="col-xs-8">
                                    <div className="checkbox icheck">
                                        <label>
                                            <input type="checkbox" /> Remember Me
            </label>
                                    </div>
                                </div>
                                
                                <div className="col-xs-4">
                                    <button type = "submit" onClick = {this.handleLogin} className="btn btn-primary btn-block btn-flat">Login</button>
                                </div>
                              
                            </div>
                        </form>
                        {/* <div className="social-auth-links text-center">
                            <p>- OR -</p>
                            <a href="url_here" className="btn btn-block btn-social btn-facebook btn-flat"><i className="fa fa-facebook" /> Sign in using
        Facebook</a>
                            <a href="url_here" className="btn btn-block btn-social btn-google btn-flat"><i className="fa fa-google-plus" /> Sign in using
        Google+</a>
                        </div> */}
                        {/* /.social-auth-links */}
                        <a href="url_here">I forgot my password</a><br />
                        <a href="url_here" className="text-center">Register a new membership</a>
                    </div>
                    {/* /.login-box-body */}
                </div>

            </div>
            )}

        </div>
            
            
        )
    }
}
