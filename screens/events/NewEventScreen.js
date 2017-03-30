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
    this.state = {
      title: "",
      location: "",
      startTime: -1,
      endTime: -1,
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
            <Button transparent onPress={() => this.props.onCreateEvent(this.state)}>
              <Text>Create</Text>
            </Button>
          </Right>
        </Header>

        <Content>
          <Form>
            <Item>
              <Input placeholder="Title" onChangeText={(text) => this.setState({title: text})} />
            </Item>
            <Item last>
              <Icon name="compass" />
              <LocationInput navigator={this.props.navigator} placeholder="Location" onChangeText={(text) => this.setState({location: text})} />
            </Item>
            <Separator bordered />
            <DateTimeInputItem onDatetimeChange={(text) => this.setState({startTime: text})}>
              <Icon name="calendar" />
              <Input placeholder="Starts" />
            </DateTimeInputItem>
            <DateTimeInputItem onDatetimeChange={(text) => this.setState({endTime: text})}>
              <Icon name="calendar" />
              <Input placeholder="Ends" />
            </DateTimeInputItem>
          </Form>
        </Content>
      </Container>
    )
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
