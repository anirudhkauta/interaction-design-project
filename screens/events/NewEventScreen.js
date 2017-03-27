import React from 'react';
import {
  Image,
} from 'react-native'
import {
  FontAwesome,
} from '@expo/vector-icons';
import { Container, Header, Form, Title, Content, ListItem, Left, Button, Body, Right, Card, CardItem, Item, Input, Row, Switch, Radio, Grid, Text, Icon, Badge, Thumbnail } from 'native-base';

export default class NewEventScreen extends React.Component {
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
            <Button transparent>
              <Text>Save</Text>
            </Button>
          </Right>
        </Header>

        <Content>
          <Form>
            <Item>
              <Input placeholder="Title" />
            </Item>
            <Item>
              <Input placeholder="Location" />
            </Item>
            <Item>
              <Input placeholder="Starts" />
              <Input placeholder="Ends" />
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
