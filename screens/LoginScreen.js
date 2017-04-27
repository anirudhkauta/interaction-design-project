import React from 'react';
import {
  LayoutAnimation,
  Image,
  Dimensions,
  // StyleSheet,
} from 'react-native'
// import { Col, View, Grid } from 'react-native-easy-grid';
import { StyleProvider, View, Container, Spinner, Header, Title, Content, ListItem, Left, Button, Body, Right, Card, CardItem, Switch, Radio, Text, InputGroup, Input, Icon, Badge, Thumbnail } from 'native-base';
import buttonTheme from '../native-base-theme/components/Button';

// let CustomLayoutAnimation = {
//   duration: 2000,
//   create: {
//     type: LayoutAnimation.Types.linear,
//     property: LayoutAnimation.Properties.opacity,
//   },
//   update: {
//     type: LayoutAnimation.Types.curveEaseInEaseOut,
//   },
// };

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step:0,
    };
  }

  componentWillUpdate() {
    LayoutAnimation.easeInEaseOut();
    // LayoutAnimation.configureNext(CustomLayoutAnimation);
  }

  render() {
    return (
      <Container>
        <Content style={{flexDirection:"column", justifyContent:"center"}}>
            <View style={{flex:1}} style={{marginBottom: 50}}>
              <Image style={{width: 400, height: 110}} source={require('../assets/images/TU-wordmark.png')} />
            </View>

            {this.state.step == 1 && (
              <View style={{justifyContent:'center'}}>
                <Spinner />
              </View>
            )}

            {this.state.step == 2 && (
              <View style={{flexDirection:'column', padding:10}}>
                <Text>Sign in as:</Text>
                <Button bordered full>
                  <Text>Student</Text>
                </Button>
                <Button bordered full>
                  <Text>Admin/Teacher</Text>
                </Button>
                <Button bordered full>
                  <Text>Guest</Text>
                </Button>
              </View>
            )}

            {this.state.step == 3 && (
              <View style={{flexDirection:'column', padding:10}}>
                <Text>Login:</Text>
                <InputGroup>
                  <Icon name="contact" />
                  <Input placeholder="Harvey username" />
                </InputGroup>
                <InputGroup>
                  <Icon name="lock" />
                  <Input placeholder="Harvey password" />
                </InputGroup>
              </View>
            )}
        </Content>
        <Button transparent onPress={() => this.setState({step: this.state.step-1})}>
          <Text>back (temperary button)</Text>
        </Button>
        <Button transparent onPress={() => this.setState({step: this.state.step+1})}>
          <Text>next (temperary button)</Text>
        </Button>
        <Button transparent onPress={() => this.props.navigator.push('home')}>
          <Text>home (temperary button)</Text>
        </Button>
      </Container>
    )
  }
}


// const customTheme = {
//   'NativeBase.ViewNB': {
//     backgroundColor: '#004b8d',
//   },
//   'NativeBase.Button': {
//     ...buttonTheme(),
//   },
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#004b8d'//'#003dcc',
//   },
//   textContent: {
//     fontSize: 20,
//     color: 'red',
//   },
// });
