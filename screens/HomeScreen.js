import React from 'react';
import {
  Image,
  Linking,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  FontAwesome,
} from '@expo/vector-icons';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={{flexDirection:'row'}}>
            <Image
              source={require('../assets/images/TU-wordmark.png')}
              style={{flexShrink:1,resizeMode:"contain",height:120}}
            />
          </View>
          {this._renderButton('Maps', 'map', 'map')}
          {this._renderButton('Events', 'calendar', 'events')}
          {this._renderButton('Places', 'building', 'places')}
          {this._renderButton('Classes', 'graduation-cap', 'classes')}
          {this._renderButton('Friends', 'users', 'friends')}
        </ScrollView>
      </View>
    )
  }

  _renderButton(name, iconName, screenName) {
    return (
      <TouchableOpacity style={styles.button}>
        <View style={styles.buttonImageTextGroup}>
          {this._renderIcon(iconName, 32)}
          <Text style={styles.buttonText}>{name}</Text>
        </View>
        {this._renderIcon('chevron-right', 16)}
      </TouchableOpacity>
    )
  }

  _renderIcon(name, size) {
    return (
      <FontAwesome
        name={name}
        size={size}
        style={{width: size+10}}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    flexDirection:'column',
    backgroundColor: '#fff',
  },
  button: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  buttonImageTextGroup: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingLeft: 10,
  },
  buttonText: {
    marginLeft: 20,
    fontSize: 20,
  },
});
