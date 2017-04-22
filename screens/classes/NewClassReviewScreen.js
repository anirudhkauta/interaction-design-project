import React, { PropTypes } from 'react';
import {
  Animated,
  Image,View
} from 'react-native'
import { Container, Header, Form, Title, Content, Label, ListItem, Left, Button, Body, Right, Card, CardItem, Item, InputGroup, Input, Row, Switch, Separator, Radio, Grid, Text, Icon, Badge, Thumbnail } from 'native-base';

export default class NewEventScreen extends React.Component {
  constructor(props) {
    super(props)
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
            <Title>New Review</Title>
          </Body>
          <Right>
            <Button transparent onPress={() => this.onPost()}>
              <Text>Post</Text>
            </Button>
          </Right>
        </Header>

        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Review</Label>
              <Input multiline />
            </Item>
          </Form>
        </Content>
      </Container>
    )
  }

  onPost() {
    this.props.navigator.pop();
  }
}
