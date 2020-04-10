import React from "react";
import { geolocated } from "react-geolocated";

class Demo extends React.Component {
    render() {
        return !this.props.isGeolocationAvailable ? (
            <div>Your browser does not support Geolocation</div>
        ) : !this.props.isGeolocationEnabled ? (
            <div>Geolocation is not enabled</div>
        ) : this.props.coords ? (
            <div>
                <h1 className="subtitle" style={{marginBottom: '.5rem'}}>You are Here</h1>
                <table>
                    <tbody>
                        <tr>
                            <td>latitude</td>
                            <td>{this.props.coords.latitude}</td>
                        </tr>
                        <tr>
                            <td>longitude</td>
                            <td>{this.props.coords.longitude}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        ) : (<div>Getting the location data&hellip; </div>);
    }
}

export default geolocated({
    positionOptions: {
        enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
})(Demo);