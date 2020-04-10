import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


import { userActions, suggestionsActions } from '../actions';
import Loader from './Loader';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
        }
    }

    componentDidMount() {
        this.props.me();
        this.props.getAllSuggestions();

        setTimeout(() => {
            this.setState({loading: false})
        }, 2000);
    }

    handleChange = e => {
        // this.setState({ filename: name })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        // this.props.getAllPlantImages();
    }

    render() {

        if(this.state.loading) return <Loader />

        let { user } = this.props;

        console.log(this.props)

        return (
            <div>

                {this.props.message.val && (
                    this.props.message.title
                )}

                <div className="columns" style={{height: '100vh'}}>
                    <div className="column is-one-quarter p-1" style={{backgroundColor: '#0f0f0f', height: '100vh'}}>
                        <h1 className="title is-size-1">
                            <Link className="has-text-primary" to='/'>Expert</Link>
                        </h1>
                        <h1 className="subtitle text-dark" style={{ textTransform: 'capitalize' }}>{user.name}</h1>

                        <div>
                            <button onClick={() => this.props.logout()} className="button is-link" >Logout</button>
                        </div>

                        <br />

                    </div>
                    <div className="column">
                        <div className="container">
                            <h1 className="is-size-1">ALL Suggestions</h1>
                            <hr />

                            {
                                this.props.suggestions && this.props.suggestions.data.map(item => (
                                    <div key={item.id}>
                                        {item.crop_name} { ` `}
                                        {item.disease_name} { ` `}
                                        {item.status} { ` `}
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}



const mapStateToProps = (state) => ({
    auth: state.authentication,
    user: state.user,
    message: state.plantImages.message,
    suggestions: state.suggestions
});

const mapDispatchToProps = {
    logout: userActions.logout,
    me: userActions.getUser,
    getAllSuggestions: suggestionsActions.getAllSuggestions,
    createSuggestion: suggestionsActions.createSuggestion
};

const connected = connect(mapStateToProps, mapDispatchToProps)(Dashboard);

export { connected as Expert }
