import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import {
  Image,
} from 'react-native'
import { Container, Header, Form, Title, Content, ListItem, Left, Button, Body, Right, Card, CardItem, Item, Input, Row, Switch, Separator, Radio, Grid, Text, Icon, Badge, Thumbnail } from 'native-base';

import LocationInput from '../../components/input/LocationInput'

import eventActions from '../../actions/events'

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
            <Item last>
              <Icon name="calendar" />
              <Input placeholder="Starts" onChangeText={(text) => this.setState({startTime: text})} />
              <Icon name="calendar" />
              <Input placeholder="Ends" onChangeText={(text) => this.setState({endTime: text})} />
            </Item>
          </Form>
        </Content>
      </Container>
    )
  }

  // <DatePicker
  //     style={{width: 200}}
  //     date={this.state.date}
  //     mode="date"
  //     placeholder="select date"
  //     format="YYYY-MM-DD"
  //     minDate="2016-05-01"
  //     maxDate="2016-06-01"
  //     confirmBtnText="Confirm"
  //     cancelBtnText="Cancel"
  //     customStyles={{
  //       dateIcon: {
  //         position: 'absolute',
  //         left: 0,
  //         top: 4,
  //         marginLeft: 0
  //       },
  //       dateInput: {
  //         marginLeft: 36
  //       }
  //       // ... You can check the source to find the other keys.
  //     }}
  //     onDateChange={(date) => {this.setState({date: date})}}
  //   />
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
