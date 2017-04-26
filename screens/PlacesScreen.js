import React from 'react';
import { connect } from 'react-redux';
import {
  Image,
} from 'react-native'
import { Components } from 'expo';
import { View, Container, Header, Title, Tabs, Tab, Separator, Content, ListItem, Left, Button, Body, Right, Card, CardItem, Item, Input, Row, Switch, Radio, Grid, Text, Icon, Badge, Thumbnail } from 'native-base';

class PlacesScreen extends React.Component {
  render() {
    let lastHeader = '';
    const placesListWithHeaders = [];
    Object.keys(this.props.buildings).forEach((buildingName) => {
      const header = buildingName.substring(0,1);

      if (header != lastHeader) {
        placesListWithHeaders.push(
          <ListItem itemDivider>
            <Text>{header}</Text>
          </ListItem>
        )
        lastHeader = header;
      }
      placesListWithHeaders.push(this._renderPlace(buildingName, this.props.buildings[buildingName]));
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
            <Title>Locations</Title>
          </Body>
          <Right>
            <Button transparent>
              <Text>Filter</Text>
            </Button>
          </Right>
        </Header>

        <Content>
          {placesListWithHeaders}
        </Content>
      </Container>
    )
  }

  _renderPlace(name, place) {
    return (
      <ListItem icon last onPress={() => this.props.navigator.push('map', {initialMarker: this._rednerInitialPlaceMarker(name, place)})}>
        <Body>
          <Text>{name}</Text>
        </Body>
        <Right>
            <Icon name="arrow-forward" />
        </Right>
      </ListItem>
    )
  }

  _rednerInitialPlaceMarker(title, place) {
    const coords = {
      latitude:place.coordinates[0],
      longitude:place.coordinates[1]
    }

    return (
      <Components.MapView.Marker
        coordinate={coords}
      >
        <View></View>
        <Components.MapView.Callout>
          <Text>{title}</Text>
        </Components.MapView.Callout>
      </Components.MapView.Marker>
    )//this.initialMarkerRef.showCallout()
  }
}

const mapStateToProps = state => {
  return {
    buildings: state.maps.buildings,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(PlacesScreen);
