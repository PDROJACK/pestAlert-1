import React from 'react';
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

const LoaderWrapper = ({type}) => (
    <section className="hero is-large is-fullheight" >
        <div className="hero-body">
            <div className="container has-text-centered">
                <Loader
                    type={type}
                    color="#00BFFF"
                    height={100}
                    width={100}
                />
            </div>
        </div>
    </section>
)

export default LoaderWrapper;