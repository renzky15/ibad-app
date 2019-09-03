import React, { Component } from 'react'
import axios from 'axios';

export default class LoginAdmin extends Component {
    state = {
        email:'',
        password:'',
        status:undefined

        
        
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
    
    // handleRead() {
    //     axios.get('http://localhost/react/api/post/read.php')
    //     .then(response => {
    //         console.log(response)
    //         let username =[];
    //         let password =[];
    //         response.data.dataArray.forEach(result => {
    //             username.push(result.username)
    //             password.push(result.user_password)
    //         });
    //         this.setState({
    //             credential:{
    //                 username:username,
    //                 password:password
    //             }
    //         })
    //         console.log(this.state.credential)
    //     })

    //     .catch(error => {
    //         console.log(error)
    //     })
    // }
    handleSubmit = (e) => {
        e.preventDefault()
        const target = e.target;
        // const inputField = document.querySelectorAll('input');
        let status = undefined
        
        const email =this.state.email;
        const password =this.state.password;
        

        // let form =  new FormData();
        // form.append('email', this.state.mailTo);
        axios.post('https://ibad-api.herokuapp.com/api/post/login.php', {
            email,password
            
        })
        .then(res  => {
            
            status = res.data.data_return[0].message
        //    const data= JSON.parse({returnData})
           
            
            this.setState({
                status
              },() => {
                  console.log(this.state.status, 'status1');

                  if (this.state.status==='Login Success.') {
                      this.props.history.push('/')
                  }else{
                    this.props.history.push('/loginAdmin')
                  }
              });
        })
        
        
          
            target.reset()
        
        
    };
    handleRedirect = () =>{
        
    };
    componentDidMount(){
        // using AXIOS
    //    this.handleRead();
       
    }
    componentDidUpdate(){
        

    }
    render() {
        return (
            <div className = "login-container">
                <div className="login-box">
                    <div className="login-logo">
                        <a href="url-here"><b>IBAD</b> | Admin</a>
                    </div>
                    {/* /.login-logo */}
                    <div className="login-box-body">
                        <p className="login-box-msg">Sign in to start your session</p>
                        <form method ="POST" onSubmit ={this.handleSubmit}>
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
                                    <button type = "submit" onClick = {this.handleRedirect} className="btn btn-primary btn-block btn-flat">Sign In</button>
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
        )
    }
}
