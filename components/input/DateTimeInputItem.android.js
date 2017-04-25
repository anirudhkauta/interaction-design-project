import React from 'react';
import {
  DatePickerAndroid,
  TimePickerAndroid,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback
} from 'react-native';
import PropTypes from 'prop-types';
import UIExplorerBlock from './UIExplorerBlock';

class DateTimeInputItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      // date: new Date(),
    }
  }

  props : {
    title?: string
  }
  static propTypes = {
    title: PropTypes.string,
  };

  dateState = {
    spinnerDate: new Date(),
    spinnerText: 'Pick a Date'
  };

  showDatePicker = async(stateKey, options) => {
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

  timeState = {
    presetHour: 4,
    presetMinute: 4,
    simpleText: 'pick a time'
  };

  showTimePicker = async(stateKey, options) => {
    try {
      const {action, minute, hour} = await TimePickerAndroid.open(options);
      var newState = {};
      if (action === TimePickerAndroid.timeSetAction) {
        newState[stateKey + 'Text'] = _formatTime(hour, minute);
        newState[stateKey + 'Hour'] = hour;
        newState[stateKey + 'Minute'] = minute;
      } else if (action === TimePickerAndroid.dismissedAction) {
        newState[stateKey + 'Text'] = _formatTime(presetHour, presetMinute);
      }
      this.setState(newState);
    } catch ({code, message}) {
      console.warn(`Error in example '${stateKey}': `, message);
    }
  };

  render() {
    return (
      <View title="Simple spinner date picker" style={styles.dateTime}>
        <UIExplorerBlock title={this.props.title}>
          <TouchableWithoutFeedback onPress={this.showDatePicker.bind(this, 'min', {
            date: this.dateState.spinnerDate,
            minDate: this.props.minimumDate,
            mode: 'spinner'
          })}>
            <Text style={styles.text}>{this.dateState.spinnerText}</Text>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={this.showTimePicker.bind(this, 'simple', {
            hour: this.timeState.presetHour,
            minute: this.timeState.presetMinute
          })}>
            <Text style={styles.text}>{this.timeState.simpleText}</Text>
          </TouchableWithoutFeedback>
        </UIExplorerBlock>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  text: {
    color: 'black'
  },
  dateTime: {
    flex: 1,
    marginRight: 10
  }
});

export default DateTimeInputItem;
