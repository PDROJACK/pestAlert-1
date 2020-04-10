import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';



const Home = (props) => {
    console.log('Home Component')
    console.log(props);
    let {loggedIn} = props.auth
    console.log(loggedIn)
    return (
        <section className="hero is-fullheight">
            <div className="hero-body">
                <div className="container">
                    <h1 className="title is-size-1">
                        GREENVIEW
                    </h1>
                    { loggedIn && (
                        <h2 className="subtitle">
                            <Link to='/dashboard'>Dashboard</Link>
                        </h2>
                    )}
                    { !loggedIn && (
                        <h2 className="subtitle">
                            <Link  to='/login'>Framers Login</Link>
                        </h2>
                    )}
                    
                </div>
            </div>
        </section>
    )
}


const mapStateToProps = (state) => ({ auth: state.authentication});
const mapDispatchToProps = {  };
const connected = connect(mapStateToProps, mapDispatchToProps)(Home);

export { connected as Home }