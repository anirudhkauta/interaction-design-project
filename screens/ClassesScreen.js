import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import {
  Image,
} from 'react-native'
import {
  FontAwesome,
} from '@expo/vector-icons';
import { Container, Header, Title, Tabs, Tab, Separator, Content, ListItem, Left, Button, Body, Right, Card, CardItem, Item, Input, Row, Switch, Radio, Grid, Text, Icon, Badge, Thumbnail } from 'native-base';

class ClassesScreen extends React.Component {


  render() {
    // //Sort classes
    // const sortedEvents = this.props.events.sort((class1, class2) => {
    //   return class1.semester - class2.semester;
    // });
    // alert(Object.keys(this.props));
    //Get jsx for classes and their headers
    let lastHeader = '';
    const classesListWithHeaders = [];
    Object.keys(this.props.classes).forEach((classId) => {
      const classObj = this.props.classes[classId];
      const header = classObj.semester;

      if (header != lastHeader) {
        classesListWithHeaders.push(
          <Separator bordered>
            <Text>{header}</Text>
          </Separator>
        )
        lastHeader = header;
      }
      classesListWithHeaders.push(this._renderClass(classObj));
    });

    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigator.pop()}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Classes</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='search' />
            </Button>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Right>
        </Header>

        <Content>
          {classesListWithHeaders}
        </Content>
      </Container>
    )
  }

  // <Separator bordered>
  //   <Text>Current Semester (Spring 2017) </Text>
  // </Separator>
  // {this._renderClass("data structures")}
  // {this._renderClass("interaction design")}
  //
  // <Separator bordered>
  //   <Text>Fall 2016</Text>
  // </Separator>
  // {this._renderClass("CS 2003: Fundamentals of Algorithms")}
  // {this._renderClass("PHYS 0000: Physics 1")}
  // {this._renderClass("a really really really long class name")}

  _renderClass(classObj) {
    return (
      <ListItem icon last onPress={() => this.props.navigator.push("ClassScreen", {classId: classObj.id})}>
        <Body>
          <Text>{classObj.name}</Text>
        </Body>
        <Right>
            <Icon name="arrow-forward" />
        </Right>
      </ListItem>
    )
  }
}

ClassesScreen.propTypes = {
  // classes: PropTypes.Object,
  // classes: /*object ref*/
}


const mapStateToProps = state => {
  return {
    classes: state.classes.classes,
  };
};

const mapDispatchToProps = dispatch => {
  return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(ClassesScreen);
