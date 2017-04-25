import React from 'react';
import {
  DatePickerAndroid,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
} from 'react-native';

class DateTimeInputItem extends React.Component {

  state = {
    spinnerDate: new Date(),
    spinnerText: 'pick a date',
    minText: 'pick a date, no earlier than today',
  };

  showPicker = async (stateKey, options) => {
    try {
      var newState = {};
      const {action, year, month, day} = await DatePickerAndroid.open(options);
      if (action === DatePickerAndroid.dismissedAction) {
        newState[stateKey + 'Text'] = 'dismissed';
      } else {
        var date = new Date(year, month, day);
        newState[stateKey + 'Text'] = date.toLocaleDateString();
        newState[stateKey + 'Date'] = date;
      }
      this.setState(newState);
    } catch ({code, message}) {
      console.warn(`Error in example '${stateKey}': `, message);
    }
  };

  render() {
    return (
        <View title="Simple spinner date picker">
          <TouchableWithoutFeedback
            onPress={this.showPicker.bind(this, 'min', {
              date: this.state.spinnerDate,
              minDate: this.state.minDate,
              mode: 'spinner'})}>
            <Text style={styles.text}>{this.state.spinnerText}</Text>
          </TouchableWithoutFeedback>
        </View>
    );
  }
}

var styles = StyleSheet.create({
  text: {
    color: 'black',
  },
});

export default DateTimeInputItem;
