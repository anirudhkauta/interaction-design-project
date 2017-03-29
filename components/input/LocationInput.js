import React, { PropTypes } from 'react';
import {
  Image,
} from 'react-native'
import { Container, Header, Form, Title, Content, ListItem, Left, Button, Body, Right, Card, CardItem, Item, Input, Row, Switch, Radio, Grid, Text, Icon, Badge, Thumbnail } from 'native-base';

import Map from '../Map'

class LocationInput extends React.Component {
  constructor(props) {
    super(props);
    this.props.autoFocus = this.props.isModeFocused;
  }

  render() {
    if(this.props.isModeFocused) {
      return (
        //This is called to run from an instance of another LocationInput as a seperate page
        <Container>
          <Header searchBar>
            <Item>
              <Input {...this.props} defaultValue={this.props._value} onSubmitEditing={(event) => this.props.onSubmitEditing(event)}></Input>
            </Item>
          </Header>

          <Content>
            <Map />
          </Content>
        </Container>
      )
    }else{
      //I have no idea why I had to use the local state
      if(this.state != null) {
        this.props._value = this.state;
      }
      return (
        <Input {...this.props} value={this.props._value} onFocus={() => this._handleOnFocus()}></Input>
      )
    }
  }

  _handleOnFocus() {
    this.props.navigator.push('LocationInput', {
      isModeFocused: true,
      onSubmitEditing: (event) => this._handleFinishEditing(event.nativeEvent.text),
      ...this.props
    });
  }


  _handleFinishEditing(val) {
    this.props.navigator.pop();
    // this.props._value = val;
    //I have no idea why I had to use the local state
    this.state = val;
  }
}

LocationInput.propTypes = {
  isModeFocused: PropTypes.bool,
  onSubmitEditing: PropTypes.func,
  _value: PropTypes.string,
}

export default LocationInput;
