import React from 'react';
// import Dimensions from 'Dimensions';
// import {
//   // Image,
//   Linking,
//   Platform,
//   // ScrollView,
//   StyleSheet,
//   // Text,
//   TouchableOpacity,
//   // View,
// } from 'react-native';
import {
  Image,
  Dimensions,
} from 'react-native'
import {
  FontAwesome,
} from '@expo/vector-icons';
// import {
//   Icon,
//   Row,
//   Subtitle,
//   Text,
//   Title,
//   View,
//   Image,
//   Divider,
//   Overlay,
//   Tile,
//   NavigationBar,
// } from '@shoutem/ui';
import { Container, Header, Title, Content, ListItem, Left, Button, Body, Right, Card, CardItem, Row, Switch, Radio, Grid, Text, Icon, Badge, Thumbnail } from 'native-base';

export default class HomeScreen extends React.Component {
  render() {
    var {height, width} = Dimensions.get('window');

    return (
      <Container>
        <Content style={{marginTop:20}}>
          <Image style={{width: width-10, height: 110}} source={require('../assets/images/TU-wordmark.png')} />
          {this._renderRow('Maps', 'compass', '#FF9501', 'map')}
          {this._renderRow('Events', 'calendar', '#FF9501', 'events')}
          {this._renderRow('Campus Locations', 'building', '#FF9501', 'places')}
          {this._renderRow('Classes', 'graduation-cap', '#FF9501', 'classes')}
          {this._renderRow('Friends', 'people', '#FF9501', 'friends')}
      </Content>
    </Container>
    )
  }

  _renderRow(name, iconName, bgColor, link) {
    return (
      <ListItem icon onPress={() => this.props.navigator.push(link)}>
        <Left>
          <Button style={{ backgroundColor: bgColor }}>
            <Icon name={iconName} />
          </Button>
        </Left>
        <Body>
          <Text>{name}</Text>
        </Body>
        <Right>
          <Icon name="arrow-forward" />
        </Right>
      </ListItem>
    )
  }
}
