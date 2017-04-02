import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import {
  Image,
} from 'react-native'
import {
  FontAwesome,
} from '@expo/vector-icons';
import { Container, Header, Title, Tabs, Tab, Separator, Content, ListItem, Left, Button, Body, Right, Card, CardItem, Item, Input, Row, Switch, Radio, Grid, Text, Icon, Badge, Thumbnail } from 'native-base';

import HeaderWithSearchIcon from '../components/HeaderWithSearchIcon';

import { formatDate, formatTime, getDayDisplayHeader } from '../api/datetime';

class EventsScreen extends React.Component {
  render() {
    return (
      <Container>
        <HeaderWithSearchIcon hasTabs>
          <Left>
            <Button transparent onPress={() => this.props.navigator.pop()}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Events</Title>
          </Body>
          <Right>
            <Button transparent onPress={() => this.props.navigator.push('newEvent')}>
              <Icon name='add' />
            </Button>
          </Right>
        </HeaderWithSearchIcon>

        <Tabs>
          <Tab heading="My Events">
            {this._renderEventsTab()}
          </Tab>
          <Tab heading="Groups">
            {this._renderGroupsTab()}
          </Tab>
          <Tab heading="Calendar">
            {this._renderCalenderTab()}
          </Tab>
        </Tabs>
      </Container>
    )
  }

  _renderEventsTab(tabName) {
    return (
      <Container>
        <Content>
        </Content>
        <Button full onPress={() => this.props.navigator.push('newEvent')}>
          <Text>Create Event</Text>
        </Button>
      </Container>
    )
  }// style={{alignSelf:'flex-end'}}>

  _renderGroupsTab(tabName) {
    return (
      <Container>
        <Content>
          <Separator bordered>
            <Text>Event manager</Text>
          </Separator>

          <Separator bordered>
            <Text>Subscribed</Text>
          </Separator>

          <Separator bordered>
            <Text>Recent</Text>
          </Separator>
        </Content>
        <Button full success onPress={() => this.props.navigator.push('newGroup')}>
          <Text>Create Group</Text>
        </Button>
      </Container>
    )
  }

  _renderCalenderTab(tabName) {
    //Sort events by date
    const sortedEvents = this.props.events.sort((event1, event2) => {
      return event1.startTime - event2.startTime;
    });

    //Get jsx for events and their headers
    //Headers will be the event's start day (today, tomorrow, thursday, etc)
    let lastHeader = '';
    const eventsListWithHeaders = [];
    sortedEvents.forEach((event) => {
      const header = getDayDisplayHeader(event.startTime);

      if (header != lastHeader) {
        eventsListWithHeaders.push(
          <Separator bordered>
            <Text>{header}</Text>
          </Separator>
        )
        lastHeader = header;
      }
      eventsListWithHeaders.push(this._renderEvent(event.title, event.startTime));
    });

    return (
      <Container>
        <Content>
          {eventsListWithHeaders}
        </Content>
      </Container>
    )

    //   return (
    //     <Container>
    //       <Content>
    //         <Separator bordered>
    //           <Text>Today</Text>
    //         </Separator>
    //         {this._renderEvent("beer pong", "4:20 pm")}
    //         {this._renderEvent("data structs project", "12:00 am")}
    //
    //         <Separator bordered>
    //           <Text>Tomorrow</Text>
    //         </Separator>
    //         {this._renderEvent("RUF", "6:00 pm")}
    //         {this._renderEvent("sleep", "null")}
    //       </Content>
    //     </Container>
    //   )
  }

  _renderEvent(name, date) {
    return (
      <ListItem icon last>
        <Body>
          <Text>{name}</Text>
        </Body>
        <Right>
            <Text>{formatTime(date)}</Text>
            <Icon name="arrow-forward" />
        </Right>
      </ListItem>
    )
  }
}

EventsScreen.propTypes = {
  onCreateEvent: PropTypes.func.isRequired,
}

const mapStateToProps = state => {
  // alert(state.events.events);
  return {
    events: state.events.events,
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(EventsScreen);
