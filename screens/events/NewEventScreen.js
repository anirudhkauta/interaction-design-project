import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import {
  Image,
} from 'react-native'
import { ActionSheet, Container, Header, Form, Title, Content, ListItem, Left, Button, Body, Right, Card, CardItem, Item, InputGroup, Input, Row, Switch, Separator, Radio, Grid, Text, Icon, Badge, Thumbnail } from 'native-base';

import LocationInput from '../../components/input/LocationInput';
import DateTimeInputItem from '../../components/input/DateTimeInputItem';

import eventActions from '../../actions/events';

class NewEventScreen extends React.Component {
  constructor(props) {
    super(props)

    let initialStartTime = new Date();
    initialStartTime.setHours(Math.ceil(initialStartTime.getHours()+initialStartTime.getMinutes()/60),0,0,0);
    this.state = {
      title: "",
      location: "",

      startTime: initialStartTime,
      durationMinutes: 60,

      food: "",
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
            {this.renderGroupSelectItem()}

            <Item>
              <Input autoFocus placeholder="Name" onChangeText={(text) => this.setState({title: text})} />
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

            <Separator bordered />

            <ListItem icon last>
              <Left>
                {this.renderIconForField(this.state.food.length > 0, 'food', '#FF9501')}
              </Left>
              <Body>
                <Input placeholder="Food" style={{flex:1}} onChangeText={(text) => this.setState({food: text})} />
              </Body>
            </ListItem>
          </Form>
        </Content>
      </Container>
    )
  }

  renderGroupSelectItem() {
    const OPTION_STUDY_GROUP = {
      option: 'Select Study Group',
      title: 'Study Group',
      getSubOptions: () => {
        const options = [
          'todo get study group options'
        ];
        options.push('Back');
        return {
          options,
          cancelButtonIndex: options.length-1,
        }
      },
    }

    const OPTION_ORGANIZATION = {
      option: 'Select Study Group',
      title: 'Study Group',
      getSubOptions() {
        const options = [
          'todo get study organization options'
        ];
        options.push('Cancel');
        return {
          options: {
            options,
            cancelButtonIndex: options.length-1,
          }
        }
      },
    }

    const OPTIONS = [
      'Personal',
      OPTION_STUDY_GROUP.option,
      OPTION_ORGANIZATION.option,
      'Cancel',
    ];

    const CANCEL_INDEX = OPTIONS.length-1;

    const self = this;

    return (
      <Item onPress={()=> ActionSheet.show({
          options: OPTIONS,
          cancelButtonIndex: CANCEL_INDEX,
          title: 'Group'
        }, (buttonIndex) => {
          if (buttonIndex == this.cancelButtonIndex) return;
          const selection = OPTIONS[buttonIndex];

          //Check for suboptions
          let subOptionsObj = null;
          if (selection == OPTION_STUDY_GROUP.option) {
            subOptionsObj = OPTION_STUDY_GROUP;
          }else if (selection == OPTION_ORGANIZATION) {
            subOptionsObj = OPTION_ORGANIZATION;
          }

          //Show sub options
          if (subOptionsObj != null) {
            let subOptions = subOptionsObj.getSubOptions();

            ActionSheet.show({
              options: subOptions.options,
              cancelButtonIndex: subOptions.cancelButtonIndex,
              title: subOptionsObj.title
            }, (subbuttonIndex) => {
              if (subbuttonIndex == subOptions.cancelButtonIndex) return;
              self.setState({ group: subOptions.options[subbuttonIndex] });
            });
          }else{
            self.setState({ group: OPTIONS[buttonIndex] });
          }
        }
      )}>
        <Input
          editable={false}
          placeholder="Group"
          value={this.state.group}
           />
      </Item>
    )
  }

  renderIconForField(isEnabled, iconName, color) {
    if (isEnabled) {
      return (
        <Button style={{backgroundColor: color}}>
          <Icon name={iconName} />
        </Button>
      )
    }

    return (
      <Button disabled>
        <Icon name="food" />
      </Button>
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
