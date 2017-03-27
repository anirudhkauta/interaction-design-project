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
        <Header hasTabs>
          <Left>
            <Button transparent>
              <Icon name='arrow-back' onPress={() => this.props.navigator.pop()} />
            </Button>
          </Left>
          <Body>
            <Title>Events</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='menu' />
            </Button>
            <Button transparent>
              <Icon name='add' />
            </Button>
          </Right>
        </Header>

        <Tabs>
          <Tab heading="My Events">
            {this._renderTab()}
          </Tab>
          <Tab heading="Subscriptions">
            {this._renderTab()}
          </Tab>
          <Tab heading="Calendar">
            {this._renderTab()}
          </Tab>
        </Tabs>
      </Container>
    )

  }
  // <Button>
  //   <Text>Create Event</Text>
  // </Button>

  _renderTab(tabName) {
    return (
      <Container>
        <Content>
          <Separator bordered>
            <Text>Today</Text>
          </Separator>
          {this._renderEvent("beer pong", "4:20 pm")}
          {this._renderEvent("data structs project", "12:00 am")}

          <Separator bordered>
            <Text>Tomorrow</Text>
          </Separator>
          {this._renderEvent("RUF", "6:00 pm")}
          {this._renderEvent("sleep", "null")}
        </Content>
      </Container>
    )
  }

  _renderEvent(name, date, isLast) {
    return (
      <ListItem icon last>
        <Body>
          <Text>{name}</Text>
        </Body>
        <Right>
            <Text>{date}</Text>
            <Icon name="arrow-forward" />
        </Right>
      </ListItem>
    )
  }
}
