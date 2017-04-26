import React, { PropTypes } from 'react';
import {
  Image,
  Platform,
} from 'react-native'
import { View, Container, Header, Title, Content, ListItem, Left, Button, Fab, Body, Right, Card, CardItem, Item, Input, Row, Switch, Radio, Grid, Text, Icon, Badge, Thumbnail } from 'native-base';

class EventMarker extends React.Component {
  render(outlineColor, fillColor, icon, onPress) {
    const outerDiameter=32;
    const innerDiameter=28;
    const fontSize=20;
    const shadow={
      shadowColor: '#000000',
      shadowOffset: {
        width: 0,
        height: 0
      },
      shadowRadius: 1,
      shadowOpacity: .5
    }
    return (
      <Button style={{backgroundColor: this.props.outlineColor, width:outerDiameter, height:outerDiameter, borderRadius:outerDiameter/2, ...shadow,
        alignItems:'center',padding:null,justifyContent:'center'}}
        onPress={this.props.onPress}
      >
        <View style={{backgroundColor: this.props.fillColor,
            flex:0,flexGrow:0,width:innerDiameter,height:innerDiameter,borderRadius:innerDiameter/2,
            alignItems:'center',padding:null,justifyContent:'center'}}
        >
          <Icon name={this.props.icon} style={{color:this.props.outlineColor,fontSize:fontSize}} />
        </View>
      </Button>
    )
  }
}

EventMarker.propTypes = {
  outlineColor: PropTypes.string.isRequired,
  fillColor: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  onPress: PropTypes.func,
}

export default EventMarker;
