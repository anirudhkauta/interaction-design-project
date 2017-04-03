import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import {
  Image,
} from 'react-native'
import {
  FontAwesome,
} from '@expo/vector-icons';
import { View, Container, Header, Title, Tabs, Tab, Separator, Content, ListItem, Left, Button, Body, Right, Card, CardItem, Item, Input, Row, Switch, Radio, Grid, Text, Icon, Badge, Thumbnail } from 'native-base';

import HeaderWithSearchIcon from '../components/HeaderWithSearchIcon';
import RoundedButton from '../components/input/RoundButton';

import { formatTime, formatDate, formatDatetimeRange } from '../api/datetime';

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
      const header = formatDate(event.startTime);

      if (header != lastHeader) {
        eventsListWithHeaders.push(
          <Separator bordered>
            <Text>{header}</Text>
          </Separator>
        )
        lastHeader = header;
      }
      eventsListWithHeaders.push(this._renderEvent(event));
    });

    return (
      <Container>
        <Content>
          {eventsListWithHeaders}
        </Content>
      </Container>
    )
  }

  _renderEvent(event) {

    return (
      <ListItem avatar last onPress={() => this.props.navigator.push('ViewEventScreen', {event})}>
        <Left style={{flexDirection: 'column'}}>
          <View style={{flex: 1, flexDirection: 'column', justifyContent: 'space-around'}}>
            <RoundedButton>
              <Icon fontSize={45} style={{backgroundColor: 'transparent',fontSize:35}} name="compass" />
            </RoundedButton>
          </View>
        </Left>
        <Body>
          <Text>{event.title}</Text>
          <Text note>{formatDatetimeRange(event.startTime, event.endTime)}</Text>
          <Text note></Text>
          <Text note>{event.location}</Text>
        </Body>
        <Right style={{justifyContent:"space-around", paddingVertical:5}}>
          <Icon name="arrow-forward" style={{marginRight:5,paddingTop:10}}/>
          <Text note style={{color: '#FF9501'}}>{event.food.length > 0 ? 'Food' : ''}</Text>
        </Right>
      </ListItem>
    )
  }
  //   return (
  //     <ListItem avatar last>
  //       <Left style={{flexDirection: 'column'}}>
  //         <View style={{flex: 1, flexDirection: 'column', justifyContent: 'space-around'}}>
  //           <RoundedButton>
  //             <Icon fontSize={45} style={{backgroundColor: 'transparent',fontSize:35}} name="compass" />
  //           </RoundedButton>
  //           <Text note style={{color: '#FF9501', alignSelf:"center"}}>Food</Text>
  //         </View>
  //       </Left>
  //       <Body>
  //         <Text>Group Name</Text>
  //         <Text note>{event.title}</Text>
  //         <Text note></Text>
  //         <Text note>{event.location}</Text>
  //       </Body>
  //       <Right>
  //         <Text note>{formattedTimeRange.startTime} -</Text>
  //         <Text note>{formattedTimeRange.endTime+(formattedTimeRange.hasDifferentEnoughEndDate ? ' '+formattedTimeRange.endDate : '')}</Text>
  //         <Text></Text>
  //         <Text note style={{color: '#FF9501'}}>Food</Text>
  //       </Right>
  //     </ListItem>
  //   )
  // }
  //   return (
  //     <ListItem icon last>
  //       <Left>
  //         <RoundedButton icon>
  //           <Icon name="compass"></Icon>
  //         </RoundedButton>
  //       </Left>
  //       <Body>
  //         <Text>Group Name</Text>
  //         <Text note>{name}</Text>
  //       </Body>
  //       <Right>
  //           <Text>{formatTime(date)}</Text>
  //           <Icon name="arrow-forward" />
  //       </Right>
  //     </ListItem>
  //   )
  // }
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
