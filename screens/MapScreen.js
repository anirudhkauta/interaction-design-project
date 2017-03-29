import React from 'react';
import {
  Image,
  Platform,
} from 'react-native'
import {
  FontAwesome,
} from '@expo/vector-icons';
import { Container, Header, Title, Content, ListItem, Left, Button, Body, Right, Card, CardItem, Item, Input, Row, Switch, Radio, Grid, Text, Icon, Badge, Thumbnail } from 'native-base';

import Map from '../components/Map'

export default class MapScreen extends React.Component {
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

        <Button rounded
            style={{position: 'absolute', left:20,bottom: (Platform.OS === 'ios') ? 20 : 40,padding:15,margin:0,width:45,height:45,zIndex:400,justifyContent: 'center'}}
            onPress={() => this.props.navigator.push('newEvent')}
          >
          <Icon name="add" style={{margin: 0}} />
        </Button>

        <Content>
          <Map />
        </Content>
      </Container>
    )
  }
}
