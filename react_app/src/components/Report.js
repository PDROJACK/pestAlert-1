import React, { Component } from 'react';
import { connect } from 'react-redux';

export default class Report extends Component {
    render() {
        return (
            <>
                <section className="section">
                    <div className="container">
                        <h1 className="is-size-1">Report</h1>

                        <h1>Type of</h1>
                    </div>
                </section>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    auth: state.authentication,
    user: state.user,
    message: state.plantImages.message
});

const mapDispatchToProps = {
};

const Connected = connect(mapStateToProps, mapDispatchToProps)(Report);

export { Connected as Report }
