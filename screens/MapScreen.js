import React from 'react';
import {
  Image,
  Platform,
} from 'react-native'
import { View, Container, Header, Title, Content, ListItem, Left, Button, Fab, Body, Right, Card, CardItem, Item, Input, Row, Switch, Radio, Grid, Text, Icon, Badge, Thumbnail } from 'native-base';

import Map from '../components/Map'

export default class MapScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isTopFilterRowActive: false,
      isFabActive: false,
      fabDisabledEvents: {
        filter1: false,
        filter2: false,
        filter3: false,
        filter4: false,
        filter5: false,
      }
    }
  }
  render() {
    return (
      <Container>
        <Header searchBar rounded>
          <Left style={{flex:0}}>
            <Button transparent onPress={() => this.props.navigator.pop()}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Item>
            <Icon name="search" />
            <Input placeholder="Search" />
          </Item>
          <Right style={{flex:0}}>
            <Button transparent onPress={() => {this.setState({isTopFilterRowActive: !this.state.isTopFilterRowActive})}}>
              <Icon name='filter' />
            </Button>
          </Right>
        </Header>

        <View style={{flex:1}}>
          <View style={{zIndex:10, flexDirection:'row', paddingTop:2, opacity:this.state.isTopFilterRowActive}}>
            <Button small style={{marginLeft:2}}>
              <Text>Today</Text>
            </Button>
            <Button small style={{marginLeft:2}}>
              <Text>Not during class</Text>
            </Button>
            <Button small light style={{marginLeft:2}}>
              <Text>Classes</Text>
            </Button>
          </View>
          <View style={{position:'absolute',left:0,top:0,right:0,bottom:0}}>
            <Map />
          </View>
        </View>

        <View>
          <Fab
              active={this.state.isFabActive}
              direction="up"
              style={{ backgroundColor: '#5067FF', flexWrap:'nowrap'}}
              position="bottomLeft"
              onPress={() => this.setState({isFabActive: !this.state.isFabActive})}
          >
              <Icon name="plus" />
              {this.renderFabFilterButtonRow('#FFF', '#252932', 'icon', '_', 'filter1')}
              {this.renderFabFilterButtonRow('#FFF', '#d9534f', 'icon', '_', 'filter2')}
              {this.renderFabFilterButtonRow('#FFF', '#5cb85c', 'icon', '_', 'filter3')}
              {this.renderFabFilterButtonRow('#FFF', '#62B1F6', 'icon', '_', 'filter4')}
              {this.renderFabFilterButtonRow('#FF9501', 'rgba(255,255,255,.9)', 'food', 'Food', 'filter5')}
              {this.renderFabButtonRow('#FFF', '#2874F0', 'add', 'New Event', false, () => {this.props.navigator.push('newEvent')})}
          </Fab>
      </View>
      </Container>
    )
  }

  renderFabFilterButtonRow(outlineColor, fillColor, icon, text, filterName) {
    return this.renderFabButtonRow(outlineColor, fillColor, icon, text, this.state.fabDisabledEvents[filterName],
      () => {
        this.setState({
          fabDisabledEvents: {
            ...this.state.fabDisabledEvents,
            [filterName]: !this.state.fabDisabledEvents[filterName]
          }
        })
      });
  }

  renderFabButtonRow(outlineColor, fillColor, icon, text, disabled, onPress) {
    if (disabled) {
      outlineColor = '#FFF';
      fillColor = '#D6D6D6';
    }

    return (
      <View
        style={{pflexDirection:'row', justifyContent:'space-between',  borderRadius:null,height:null,width:null, backgroundColor:'transparent'}}
        onPress={onPress}
      >
        {this.renderFabButton(outlineColor, fillColor, icon, onPress)}
        <Text style={{color:null, flexGrow:1, marginLeft:10}}>{text}</Text>
      </View>
    )
  }

  renderFabButton(outlineColor, fillColor, icon, onPress) {
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
      <Button style={{backgroundColor: outlineColor, width:outerDiameter, height:outerDiameter, borderRadius:outerDiameter/2, ...shadow,
        alignItems:'center',padding:null,justifyContent:'center'}}
        onPress={onPress}
      >
        <Content style={{backgroundColor: fillColor,
            flex:0,flexGrow:0,width:innerDiameter,height:innerDiameter,borderRadius:innerDiameter/2,
            alignItems:'center',padding:null,justifyContent:'center'}}
        >
          <Icon name={icon} style={{color:outlineColor,fontSize:fontSize}} />
        </Content>
      </Button>
    )
  }
}
