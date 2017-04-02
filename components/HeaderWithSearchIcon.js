import React, { PropTypes } from 'react';
import {
  Animated,
  Easing,
} from 'react-native';
import { Header, Left, Button, Body, Right, Icon, Input, Item, View } from 'native-base';

export default class HeaderWithSearchIcon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchbarMaxWidth: 0,
      searchbarEntryAnim: new Animated.Value(1),
      searchbarNotEmpty: false,
      headerSearchbarActive: false,
    }
  }

  render() {
    //Add/modify children for search bar
    const children = this.props.children.map((child) => {
      if (this.state.headerSearchbarActive) {
        if (child.type == Left || child.type == Right) {
          return (
            <child.type {...child.props} style={{flex:0}}>
              {child.props.children}
            </child.type>
          )
        } else if (child.type == Body) {
          if(this.state.searchbarMaxWidth == 0) { //Get preferred width if not set
            return <View
              style={{flex:1}}
              onLayout={(event) => this.setState({searchbarMaxWidth: event.nativeEvent.layout.width})}
            />
          }else{ //Render searchbar
            return (
              <Item style={{marginLeft: this.state.searchbarEntryAnim}}>
                <Icon name="search" />
                <Input autoFocus
                  placeholder="Search"
                  onChangeText={(text) => this.setState({searchbarNotEmpty: text.length > 0})}
                  onBlur={() => this.setSearchbarVisibility(this.state.searchbarNotEmpty)}
                />
              </Item>
            )
          }
        }
      }else if (child.type == Right) {
        return (
          <Right {...child.props}>
            <Button transparent onPress={() => this.setSearchbarVisibility(true)}>
              <Icon name='search' />
            </Button>
            {child.props.children}
          </Right>
        )
      }

      return child;
    });

    return (
      <Header {...this.props} rounded searchBar={this.state.headerSearchbarActive}>
        {children}
      </Header>
    )
  }

  onShowSearchbar() {
    this.setState({headerSearchbarActive: true});
  }

  setSearchbarVisibility = (makeVisible) => {
    if (makeVisible == this.state.headerSearchbarActive) return;//no change

    if(makeVisible) {
      //Change state, then animate entry
      this.setState({headerSearchbarActive: true});
      this.state.searchbarEntryAnim.setValue(this.state.searchbarMaxWidth);
      Animated.timing(
        this.state.searchbarEntryAnim,
        {
          toValue: 0,
          easing: Easing.elastic(1),
          duration: 200,
        },
      ).start();
    }else{
      //Animate exit, then change state
      this.state.searchbarEntryAnim.setValue(1);
      Animated.timing(
        this.state.searchbarEntryAnim,
        {
          toValue: this.state.searchbarMaxWidth,
          duration: 100,
        },
      ).start(() => this.setState({headerSearchbarActive: false}));
    }
  }
}
