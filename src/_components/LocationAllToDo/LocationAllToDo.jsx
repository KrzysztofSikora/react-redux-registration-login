import React, {Component, useEffect, useState} from 'react';
import GoogleMapReact from 'google-map-react';
import {connect} from 'react-redux';
import {todoConstants} from "../../_constants";


class LocationAllToDo extends Component {

    currentPosition = {
        lat: 59.955413,
        lng: 30.337844
    };

    static defaultProps = {
        zoom: 11
    };
    map = null;
    maps = null;
    markers = [];

    componentDidUpdate = (prevProps, prevState) => {
        function isEmpty(obj) {
            for(var key in obj) {
                if(obj.hasOwnProperty(key))
                    return false;
            }
            return true;
        }
        if(!isEmpty(prevProps.todo)) {
            var self = this;
            this.markers.forEach(function (k,v) {
                k.setMap(null)
            });
            self.props.todo.items.forEach(function (v,k) {
                self.markers.push(self.addMarker(v.lat, v.lng, self.map, self.maps));
            });
        }
    };



    apiIsLoaded = async (map, maps) => {
       this.map = map;
       this.maps = maps;
       var self = this;
       self.props.todo.items.forEach(function (v,k) {
           self.markers.push(self.addMarker(v.lat, v.lng, map, maps));
       });


    };



    addMarker = (lat, lng, map, maps) => {
        var marker = new maps.Marker({
            map: map,
            animation: maps.Animation.DROP,
            position: {lat: Number(lat) , lng: Number(lng)}
        });

        marker.addListener('click', toggleBounce);
        function toggleBounce() {
            if (marker.getAnimation() !== null) {
                marker.setAnimation(null);
            } else {
                marker.setAnimation(maps.Animation.BOUNCE);
            }
        }
        return marker;
    }

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

const connectedLocationAllToDo = connect(mapStateToProps)(LocationAllToDo);
export {connectedLocationAllToDo as LocationAllToDo};


// export default LocationToDo;