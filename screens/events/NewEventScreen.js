import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import {
  Image,
} from 'react-native'
import { Container, Header, Form, Title, Content, ListItem, Left, Button, Body, Right, Card, CardItem, Item, Input, Row, Switch, Separator, Radio, Grid, Text, Icon, Badge, Thumbnail } from 'native-base';

import LocationInput from '../../components/input/LocationInput';
import DateTimeInputItem from '../../components/input/DateTimeInputItem';

import eventActions from '../../actions/events';

class NewEventScreen extends React.Component {
  constructor(props) {
    super(props)

    let initialStartTime = new Date();
    initialStartTime.setHours(Math.ceil(initialStartTime.getHours()),0,0,0);
    this.state = {
      title: "",
      location: "",
      startTime: initialStartTime,
      durationMinutes: 60,
    }
  }

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigator.pop()}>
              <Icon name='close' />
            </Button>
          </Left>
          <Body>
            <Title>New Event</Title>
          </Body>
          <Right>
            <Button transparent onPress={() => this.onCreateEvent()}>
              <Text>Create</Text>
            </Button>
          </Right>
        </Header>

        <Content>
          <Form>
            <Item>
              <Input placeholder="Name" onChangeText={(text) => this.setState({title: text})} />
            </Item>
            <Item last>
              <Icon name="compass" />
              <LocationInput navigator={this.props.navigator} placeholder="Location" onChangeText={(text) => this.setState({location: text})} />
            </Item>
            <Separator bordered />
            <DateTimeInputItem
                value={this.state.startTime}
                onDatetimeChange={(date) => this.setState({startTime: date})}
              >
              <Icon name="calendar" />
              <Input placeholder="Starts" />
            </DateTimeInputItem>
            <DateTimeInputItem
                value={this.getEndDate()}
                onDatetimeChange={(date) => this.setState({durationMinutes: Math.round((date.getTime()-this.state.startTime.getTime())/(60*1000))})}
              >
              <Icon name="calendar" />
              <Input placeholder="Ends" />
            </DateTimeInputItem>
          </Form>
        </Content>
      </Container>
    )
  }

  getEndDate() {
    let date = new Date(this.state.startTime);
    date.setMinutes(this.state.startTime.getMinutes() + this.state.durationMinutes);
    return date;
  }

  onCreateEvent() {
    this.props.onCreateEvent(this.state);
    this.props.navigator.pop();
  }
}

NewEventScreen.propTypes = {
  onCreateEvent: PropTypes.func.isRequired,
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    onCreateEvent: (event) => dispatch(eventActions.createNewEvent(event)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(NewEventScreen);
