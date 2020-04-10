import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import {userActions} from '../actions';
import LoaderWrapper from './Loader';

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: 'user@app.com',
            password: 'password'
        }
    }
    

    handleChange = e => this.setState({ [e.target.name]: e.target.value });

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.login(this.state);
    }


    render() {

        // if (localStorage && localStorage.getItem('token')) return <Redirect to='/dashboard' />

        const {auth} = this.props;

        if (localStorage && localStorage.getItem('token') && localStorage.getItem('role') === 'user') return <Redirect to='/dashboard' />
        
        if (localStorage && localStorage.getItem('token') && localStorage.getItem('role') === 'expert') return <Redirect to='/expert' />

        return (
            <div>
                <section className="hero is-fullheight">
                    <div className="hero-body">
                        <div className="container">
                            <h1 className="title">
                                Login
                            </h1>
                            <div className="columns">
                                <div className="column is-half">
                                    <form action="" onSubmit={this.handleSubmit} className="column is-3by4" style={{ padding: 0 }}>
                                        <div className="field">
                                            <div className="control has-icons-left">
                                                <input 
                                                    onChange={this.handleChange} 
                                                    value={this.state.email}
                                                    className="input" 
                                                    name="email" 
                                                    type="text" 
                                                    placeholder="Enter Email" 
                                                />
                                                <span className="icon is-small is-left">
                                                    <i className="fas fa-user"></i>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="field">
                                            <div className="control has-icons-left">
                                                <input onChange={this.handleChange} value={this.state.password} className="input" name="password" type="password" placeholder="Enter password" />
                                                <span className="icon is-small is-left">
                                                    <i className="fas fa-lock"></i>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="field">
                                            <button type="submit" className="button is-primary is-fullwidth">Submit</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <h2 className="subtitle">
                                <Link to='/'>Home</Link>
                            </h2>
                        </div>
                    </div>
                </section>
            </div>
        );
    }

}



const mapStateToProps = (state) => ({ auth: state.authentication });
const mapDispatchToProps = { login: userActions.login };
const connected = connect(mapStateToProps, mapDispatchToProps)(Login);

export {connected as Login}
