import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import {
  Image,
  Linking,
} from 'react-native'
import {
  FontAwesome,
} from '@expo/vector-icons';
import { View, H1, Container, Header, Title, Tabs, Tab, Separator, Content, ListItem, Left, Button, Body, Right, Card, CardItem, Item, Input, Row, Switch, Radio, Grid, Text, Icon, Badge, Thumbnail } from 'native-base';

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
            <Title>{this.props.classObj.name}</Title>
          </Body>
          <Right style={{flex:0}}>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Right>
        </Header>

        <Tabs>
          <Tab heading="Information">
            {this._renderDescriptionTab()}
          </Tab>
          <Tab heading="Tutors">
            {this._renderTutorsTab()}
          </Tab>
          <Tab heading="Reviews">
            {this._renderReviewsTab()}
          </Tab>
        </Tabs>
      </Container>
    )

  }
  // <Button>
  //   <Text>Create Event</Text>
  // </Button>

  _renderDescriptionTab(tabName) {
    return (
      <Container>
        <Content>
          {this._renderContact('S. Kuttal', 'email@utulsa.edu')}

          <ListItem icon>
            <Left>
              <Icon name="clock"></Icon>
            </Left>
            <Body>
              <Text>3:30 PM - 4:45 PM</Text>
              <Text>Tuesdays/Thursdays</Text>
            </Body>
          </ListItem>

          <ListItem icon>
            <Left>
              <Icon name="compass"></Icon>
            </Left>
            <Body>
              <Text>Location: Keplinger Hall Room M3</Text>
            </Body>
          </ListItem>

          <Separator>
          </Separator>



          <View>
            <Item>
              <Left>
                <Icon name="paper"></Icon>
              </Left>
              <Body>
                <Text>Description</Text>
              </Body>
            </Item>
            <Text>This class teaches students the fundamentals of interaction design.</Text>
          </View>

        </Content>
      </Container>
    )
  }

  _renderTutorsTab(tabName) {
    let tutors = this.props.tutors.map((tutor) =>
      this._renderContact(tutor.name, tutor.email, 'subject=Tutoring for '+this.props.classObj.name)
    );

    return (
      <Container>
        <Content>
          {tutors}
        </Content>
      </Container>
    )
  }

  _renderReviewsTab(tabName) {
    let reviews = this.props.classObj.reviews.map((review) => {
      return (
        <ListItem>
          <Body>
            <Item style={{borderWidth:null}}>
              <Left><Text style={{fontWeight: 'bold'}}>Glorious Leader</Text></Left>
              <Right><Text note>2/3/4</Text></Right>
            </Item>
            <Text>{review.body}</Text>
          </Body>
        </ListItem>
      )
    });

    return (
      <Container>
        <Content>
          <ListItem>
            <Body>
              <Item style={{borderWidth:null}}>
                <Left><Text style={{fontWeight: 'bold'}}>Glorious Leader</Text></Left>
                <Right><Text note>2/3/4</Text></Right>
              </Item>
              <Text>This is a really long review. I learned so much al-gebra. 1 + 1 is approximately 2</Text>
            </Body>
          </ListItem>

          {reviews}
        </Content>

        <Button full onPress={() => this.props.navigator.push('NewClassReviewScreen', {classObj: this.props.classObj})}>
          <Text>New Review</Text>
        </Button>
      </Container>
    )
  }




  _renderContact(name, email, emailContent) {
    return (
      <ListItem icon>
        <Left>
          <Icon name="person"></Icon>
        </Left>
        <Body>
          <Text>{name}</Text>
          <Text onPress={() => Linking.openURL('mailto://'+email+'?'+emailContent)}>{email}</Text>
        </Body>
      </ListItem>
    )
  }
}

ClassScreen.propTypes = {
  classId: PropTypes.number.isRequired,
  // className: PropTypes.string.isRequired,
}

// export default ClassScreen;

const mapStateToProps = (state, ownProps) => {
  let classObj = state.classes.classes[ownProps.classId];
  let tutors = classObj.tutorIds.map((tutorId) => state.users.users[tutorId]);

  return {
    classObj,
    tutors,
  };
};

const mapDispatchToProps = dispatch => {
  return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(ClassScreen);
