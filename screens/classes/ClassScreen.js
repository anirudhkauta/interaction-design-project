import React, { PropTypes } from 'react';
import {
  Image,
} from 'react-native'
import {
  FontAwesome,
} from '@expo/vector-icons';
import { Container, Header, Title, Tabs, Tab, Separator, Content, ListItem, Left, Button, Body, Right, Card, CardItem, Item, Input, Row, Switch, Radio, Grid, Text, Icon, Badge, Thumbnail } from 'native-base';

class ClassScreen extends React.Component {
  render() {
    return (
      <Container>
        <Header hasTabs>
          <Left style={{flex:0}}>
            <Button transparent onPress={() => this.props.navigator.pop()}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>{this.props.className}</Title>
          </Body>
          <Right style={{flex:0}}>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Right>
        </Header>

        <Tabs>
          <Tab heading="Description">
            {this._renderTab()}
          </Tab>
          <Tab heading="Tutors">
            {this._renderTab()}
          </Tab>
          <Tab heading="Reviews">
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
          <Text>Class time: 3:30 PM - 4:45 PM</Text>
          <Text>Tuesdays/Thursdays</Text>

          <Text>Location: Keplinger Hall Room M3</Text>

          <Text>Instructor: S. Kuttal</Text>
          <Text>Email: email@utulsa.edu</Text>
          <Text>Phone: 555-555-5555</Text>

          <Text>Description:</Text>
          <Text>This class teaches students the fundamentals of interaction design.</Text>
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

ClassScreen.propTypes = {
  className: PropTypes.string.isRequired,
}

export default ClassScreen
