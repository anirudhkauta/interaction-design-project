import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import {
  Animated,
  Image,View
} from 'react-native'
import { Container, Header, Form, Title, Content, Label, ListItem, Left, Button, Body, Right, Card, CardItem, Item, InputGroup, Input, Row, Switch, Separator, Radio, Grid, Text, Icon, Badge, Thumbnail } from 'native-base';

import classActions from '../../actions/classes';

class NewClassReviewScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      body: '',
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
              <Input multiline onChangeText={(text) => this.setState({body: text})} />
            </Item>
          </Form>
        </Content>
      </Container>
    )
  }

  onPost() {
    this.props.onPost(this.props.classObj.id, this.state);
    this.props.navigator.pop();
  }
}

NewClassReviewScreen.propTypes = {
  // classObj: /*todo */
}

const mapStateToProps = state => {
  return {
    // classObj: state.classes[classObj.id].reviews,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onPost: (classId, review) => dispatch(classActions.postReview(classId, review)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(NewClassReviewScreen);
