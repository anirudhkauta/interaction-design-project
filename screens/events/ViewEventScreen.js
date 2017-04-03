import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import {
  Animated,
  Image,View
} from 'react-native'
import { ActionSheet, Container, Header, Footer, Form, Title, Content, ListItem, Left, Button, Body, Right, Card, CardItem, Item, InputGroup, Input, Row, Switch, Separator, Radio, Grid, Text, Icon, Badge, Thumbnail } from 'native-base';

import LocationInput from '../../components/input/LocationInput';
import DateTimeInputItem from '../../components/input/DateTimeInputItem';

import Map from '../../components/Map';

class ViewEventScreen extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { event } = this.props;

    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigator.pop()}>
              <Icon name='close' />
            </Button>
          </Left>
          <Body>
            <Title>{event.title}</Title>
          </Body>
          <Right>
          </Right>
        </Header>

        <Content>
          <ListItem icon>
            <Left>
              <Button transparent>
                <Icon name="calender" />
              </Button>
            </Left>
            <Body>
              <Text>time</Text>
            </Body>
          </ListItem>

          <ListItem icon>
            <Left>
              <Button transparent>
                <Icon name="compass" />
              </Button>
            </Left>
            <Body>
              <Text>location</Text>
            </Body>
          </ListItem>

          <View style={{height:200}}>
            <Map />
          </View>

          <ListItem icon>
            <Left>
              <Button transparent>
                <Icon name="note" />
              </Button>
            </Left>
            <Body>
              <Text>description</Text>
            </Body>
          </ListItem>

          <ListItem icon>
            <Left>
              <Button transparent>
                <Icon name="food" />
              </Button>
            </Left>
            <Body>
              <Text>food</Text>
            </Body>
          </ListItem>

        </Content>

        <Button full success>
          <Text>Mark as going</Text>
        </Button>
      </Container>
    )
  }
}

ViewEventScreen.propTypes = {
  event: PropTypes.object.isRequired,
}

export default ViewEventScreen;
