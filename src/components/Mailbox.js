import React, { Component } from 'react'
import Axios from 'axios';

export default class Mailbox extends Component {
    state = {
        email: '',
        company_name: '',
        attachment: null
    };
    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })

    };
    submitHandler = (e) => {
        e.preventDefault()
        console.log(this.state.email)
        const email = this.state.email;
        const company_name = this.state.company_name;
        // const attachment =this.state.attachment;
        // let form =  new FormData();
        // form.append('email', this.state.mailTo);
        Axios.post('https://ibad-api.herokuapp.com/models/sendEmail.php', {
            'email': email,
            'company_name': company_name           // 'attachment': attachment

        })
            .then(res =>
                console.log(res.data)
            )


    };



    render() {
        return (
            <div className="content-wrapper">
                
                    <ol className="breadcrumb">
                        <li><a href="#"><i className="fa fa-dashboard" /> Home</a></li>
                        <li className="active">Mail</li>
                    </ol>
                <section className="content">
                    <div className="row">
                      
                        <div className="col-md-12">
                            <div className="box box-primary">
                                <div className="box-header with-border">
                                    <h3 className="box-title">Compose New Message</h3>
                                </div>
                                {/* /.box-header */}
                                <div className="box-body">
                                    <div className="form-group">
                                        <input className="form-control" name="email" onChange={this.changeHandler} placeholder="To:" />
                                    </div>
                                    <div className="form-group">
                                        <input className="form-control" name="company_name" onChange={this.changeHandler} placeholder="Company Name" />
                                    </div>
                                    <div className="form-group">
                                        <div className="btn btn-default btn-file">
                                            <i className="fa fa-paperclip" /> Attachment
                                        <input type="file" onChange={this.changeHandler} name="attachment" />
                                        </div>
                                        <p className="help-block">Max. 32MB</p>
                                    </div>
                                </div>
                                {/* /.box-body */}
                                <div className="box-footer">
                                    <div className="pull-right">
                                        <button type="submit" onClick={this.submitHandler} className="btn btn-primary"><i className="fa fa-envelope-o" /> Send</button>
                                    </div>
                                    <button type="reset" className="btn btn-default"><i className="fa fa-times" /> Discard</button>
                                </div>
                                {/* /.box-footer */}
                            </div>
                            {/* /. box */}
                        </div>
                        {/* /.col */}
                    </div>
                    {/* /.row */}
                </section>


            </div> //end
        )
    }
}
