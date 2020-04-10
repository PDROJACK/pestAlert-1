import React from 'react';
import {
  Router, Route, Switch, Redirect
  // Redirect, Link, useRouteMatch, useParams 
} from 'react-router-dom';
import { connect } from 'react-redux';
import { history } from './helpers'
import { Login, Home, Dashboard, Report } from './components'

import './App.sass';
import LoadingBar from 'react-redux-loading-bar'
import { Expert } from './components/Expert';

class App extends React.Component {

  render() {
    // console.log(this.props)
    return (
      <div>
        <LoadingBar style={{ backgroundColor: '#f11946', height: '5px' }} />
        <Router history={history}>
          <Switch>
            <Route exact path="/"><Home {...this.props} /></Route>
            <Route path="/login" component={Login} />
            <FarmerRoute path="/dashboard"  component={Dashboard} />
            <FarmerRoute path="/report" component={Report} />
            <ExpertRoute path="/expert" component={Expert} />
          </Switch>
        </Router>
        
      </div>
    )
  }
}

const FarmerRoute = ({component: Component, path:path, ...rest}) => {
  if (localStorage.getItem('role') === 'user') return <PrivateRoute path={path} component={Component} />
  else return <Redirect to='/login' />
}

const ExpertRoute = ({component: Component, auth: auth, path:path, ...rest}) => {
  if (localStorage.getItem('role') === 'expert') return <PrivateRoute path={path} component={Component} />
  else return <Redirect to='/login'  />
}


export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    localStorage.getItem('token')
      ? <Component {...props} />
      : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
  )} />
)


const mapStateToProps = (state) => ({ auth: state.authentication });
// const mapDispatchToProps = { login: userActions.login };
const connected = connect(mapStateToProps, {})(App);

export { connected as App }