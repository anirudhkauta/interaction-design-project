import React from 'react';
import {
  Image,
} from 'react-native'
import { Components } from 'expo'
import { View, Container, Header, Form, Title, Content, ListItem, Left, Button, Body, Right, Card, CardItem, Item, Input, Row, Switch, Radio, Grid, Text, Icon, Badge, Thumbnail } from 'native-base';

export default class Map extends React.Component {
  render() {
    return (
      <Components.MapView
        style={{flex:10,flexGrow:10, width:null,height:null}}
        initialRegion={{
          latitude:36.1511022,
          longitude:-95.9460887,
          latitudeDelta: 0.0122,
          longitudeDelta:0.0122,
        }}
      />
    )
    // return (
    //   <View>
    //     <Text>TODO Map</Text>
    //   </View>
    // )
  }
}
