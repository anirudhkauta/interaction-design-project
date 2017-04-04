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
      isFabActive: false,
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
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Right>
        </Header>

        <View style={{flex:1}}>
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
              {this.renderFabButtonRow('#FFF', '#252932', 'icon', 'icon')}
              {this.renderFabButtonRow('#FFF', '#d9534f', 'icon', 'icon')}
              {this.renderFabButtonRow('#FFF', '#5cb85c', 'icon', 'icon')}
              {this.renderFabButtonRow('#FFF', '#62B1F6', 'icon', 'icon')}
              {this.renderFabButtonRow('#FF9501', 'rgba(255,255,255,.9)', 'food', 'Food')}
              {this.renderFabButtonRow('#FFF', '#2874F0', 'add', 'New Event')}
          </Fab>
      </View>
      </Container>
    )
  }

  renderFabButtonRow(outlineColor, fillColor, icon, text) {
    return (
      <View style={{pflexDirection:'row', justifyContent:'space-between',  borderRadius:null,height:null,width:null, backgroundColor:'transparent'}}>
        {this.renderFabButton(outlineColor, fillColor, icon)}
        <Text style={{color:null, flexGrow:1, marginLeft:10}}>{text}</Text>
      </View>
    )
  }

  renderFabButton(outlineColor, fillColor, icon) {
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
        alignItems:'center',padding:null,justifyContent:'center'}}>
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
