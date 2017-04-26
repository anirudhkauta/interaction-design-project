import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import {
  Image,
  TouchableOpacity,
} from 'react-native'
import { Components } from 'expo';
import { View, Container, Header, Form, Title, Content, ListItem, Left, Button, Body, Right, Card, CardItem, Item, Input, Row, Switch, Radio, Grid, Text, Icon, Badge, Thumbnail } from 'native-base';

import EventMarker from './EventMarker';

import { formatDatetimeRange } from '../api/datetime';

class Map extends React.Component {
  // constructor(props, context) {
  //   super(props, context)
  // }

  render() {
    // store.subscribe(() => {
    //   //TODO refresh
    //   this.setState({
    //     events: store.getState().events.events
    //   });
    // });
    // alert(this.context.store)
    // let val = this.props.getEvents();
    // alert(val)

    let eventMarkers = this.props.events.map((event) => {
      let coords = this.props.buildings[event.location];

      if (coords !== undefined) {
        coords = {
          latitude:coords.coordinates[0],
          longitude:coords.coordinates[1]
        }
      }else{
        coords = {
          latitude:36.1516022,
          longitude:-95.9480887
        }
      }

      //<EventMarker outlineColor='#FFF' fillColor='#5cb85c' icon='icon' />
      return (
        <Components.MapView.Marker
          coordinate={coords}
        >

          <Components.MapView.Callout>
            <ListItem style={{borderBottomWidth: null, padding:0, margin:0}} onPress={() => this.props.navigator.push('ViewEventScreen', {event})}>
              <Body style={{paddingLeft:0, marginLeft:0}}>
                <Text>{event.title}</Text>
                <Text note>{formatDatetimeRange(event.startTime, event.endTime)}</Text>
                <Text>{event.description}</Text>
              </Body>
              <Right>
                <Icon note name="arrow-forward"/>
              </Right>
            </ListItem>
          </Components.MapView.Callout>
        </Components.MapView.Marker>
      )
      // <TouchableOpacity onPress={() => this.props.navigator.push('ViewEventScreen', {event})}>
      //   <Text>{event.title}</Text>
      //   <Text>{event.description}</Text>
      // </TouchableOpacity>
    });



    return (
      <Components.MapView
        style={{flex:10,flexGrow:10, width:null,height:null}}
        initialRegion={{
          latitude:36.1511022,
          longitude:-95.9460887,
          latitudeDelta: 0.0122,
          longitudeDelta:0.0122,
        }}
      >
        {eventMarkers}
        {this.props.initialMarker !== undefined && React.cloneElement(
          this.props.initialMarker,
          { ref: (ref) => {this.initialMarkerRef = ref} }
        )}
      </Components.MapView>
    )
    // return (
    //   <View>
    //     <Text>TODO Map</Text>
    //   </View>
    // )
  }
  componentDidMount() {
    if (this.props.initialMarker !== undefined) {
      setTimeout(() => {
        this.initialMarkerRef.showCallout();
      }, 500);
    }
  }
}
// <Components.MapView.Marker
//   coordinate={{latitude:36.1511022,
//   longitude:-95.9460887,}}
//   title={"test"}
//   description={"event.description TODO"}
// />
// {events.map(event => (
//   <Components.MapView.Marker
//     coordinate={{latitude:36.1511022,
//     longitude:-95.9460887,}}
//     title={event.name}
//     description={"event.description TODO"}
//   />
// ))}

Map.propTypes = {
  initialMarker: PropTypes.element,
}

const mapStateToProps = state => {
  return {
    events: state.events.events,
    buildings: state.maps.buildings,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  // alert(JSON.stringify(getStore))
  // return {
  //   getEvents: (dispatch, getStore) => {
  //     alert(JSON.stringify(getStore()));
  //     return 'getStore()';
  //   },
  // };
};

export default connect(mapStateToProps, mapDispatchToProps)(Map);
