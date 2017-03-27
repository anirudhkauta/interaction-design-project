import React from 'react';
import {
  Image,
} from 'react-native'
import {
  FontAwesome,
} from '@expo/vector-icons';
import { Container, Header, Title, Tabs, Tab, Separator, Content, ListItem, Left, Button, Body, Right, Card, CardItem, Item, Input, Row, Switch, Radio, Grid, Text, Icon, Badge, Thumbnail } from 'native-base';

export default class Places extends React.Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='arrow-back' onPress={() => this.props.navigator.pop()} />
            </Button>
          </Left>
          <Body>
            <Title>Locations</Title>
          </Body>
          <Right>
            <Button transparent>
              <Text>Filter</Text>
            </Button>
          </Right>
        </Header>

        <Content>
          <ListItem itemDivider>
            <Text>A</Text>
          </ListItem>
          {this._renderPlace("ACAC")}
          <ListItem itemDivider>
            <Text>F</Text>
          </ListItem>
          {this._renderPlace("Fisher South")}
          <ListItem itemDivider>
            <Text>H</Text>
          </ListItem>
          {this._renderPlace("Hardesty Hall")}
        </Content>
      </Container>
    )
  }

  _renderPlace(name) {
    return (
      <ListItem icon last>
        <Body>
          <Text>{name}</Text>
        </Body>
        <Right>
            <Icon name="arrow-forward" />
        </Right>
      </ListItem>
    )
  }
}
