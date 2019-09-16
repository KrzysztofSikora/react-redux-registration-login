import React, {Component, useEffect, useState} from 'react';
import GoogleMapReact from 'google-map-react';
import {connect} from 'react-redux';
import {todoConstants} from "../../_constants";


class LocationToDo extends Component {

    currentPosition = {
        lat: this.props.todo.item.lat ? this.props.todo.item.lat : 59.955413,
        lng: this.props.todo.item.lng ? this.props.todo.item.lng : 30.337844
    };

    static defaultProps = {
        zoom: 11
    };

    apiIsLoaded = (map, maps) => {
        var self = this;
        var marker = new maps.Marker({
            map: map,
            draggable: true,
            animation: maps.Animation.DROP,
            position: {lat: this.currentPosition.lat , lng: this.currentPosition.lng}
        });
        marker.addListener('click', toggleBounce);
        maps.event.addListener(marker, "dragend", function (event) {
            let location = {
                'lat': event.latLng.lat(),
                'lng': event.latLng.lng()
            };
            self.props.dispatch({type: todoConstants.UPDATE_LOCATION, location})
        });
        function toggleBounce() {
            if (marker.getAnimation() !== null) {
                marker.setAnimation(null);
            } else {
                marker.setAnimation(maps.Animation.BOUNCE);
            }
        }
    };


    render() {
        return (
            // Important! Always set the container height explicitly
            <div style={{height: '100vh', width: '100%'}}>
                <div onClick={this.dispatcher}>Kliknij tu</div>
                <GoogleMapReact
                    bootstrapURLKeys={{key: 'AIzaSyD5MVCo_7GHBNforib8cPTb3tRgvOsl7k0'}}
                    defaultCenter={this.currentPosition}
                    defaultZoom={this.props.zoom}
                    onGoogleApiLoaded={({map, maps}) => this.apiIsLoaded(map, maps, this.props)}
                >
                </GoogleMapReact>


            </div>
        );
    }
}

function mapStateToProps(state) {
    const {todo} = state;
    return {todo};
}

const connectedLocationToDo = connect(mapStateToProps)(LocationToDo);
export {connectedLocationToDo as LocationToDo};


// export default LocationToDo;