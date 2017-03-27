import React from 'react';
import {
  Image,
} from 'react-native'
import {
  FontAwesome,
} from '@expo/vector-icons';
import { Container, Header, Title, Tabs, Tab, Separator, Content, ListItem, Left, Button, Body, Right, Card, CardItem, Item, Input, Row, Switch, Radio, Grid, Text, Icon, Badge, Thumbnail } from 'native-base';

export default class MapScreen extends React.Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigator.pop()}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Classes</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='search' />
            </Button>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Right>
        </Header>

        <Content>
          <Separator bordered>
            <Text>Current Semester</Text>
          </Separator>
          {this._renderClass("data structures")}
          {this._renderClass("interaction design")}

          <Separator bordered>
            <Text>Fall 2016</Text>
          </Separator>
          {this._renderClass("algorithms")}
          {this._renderClass("physics")}
          {this._renderClass("a really really really long class name")}
        </Content>
      </Container>
    )
  }

  _renderClass(name) {
    return (
      <ListItem icon last onPress={() => this._gotoClassScreen(name)}>
        <Body>
          <Text>{name}</Text>
        </Body>
        <Right>
            <Icon name="arrow-forward" />
        </Right>
      </ListItem>
    )
  }

  _gotoClassScreen(name) {
    this.props.navigator.push("classScreen", {className: name});
  }
}
