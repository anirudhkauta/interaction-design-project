import React, { PropTypes } from 'react';
import {
  DatePickerAndroid,
  TimePickerAndroid,
  View,
} from 'react-native'
import { Container, Title, Content, Item, Input } from 'native-base';
import { formatDate, formatTime } from '../../api/datetime';

class DateTimeInputItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibleElement: 'none', // 'date' | 'time' | 'none'
      date: new Date(),
    }
  }


  render() {
    //Add extra props to input element, keep other children the same.
    const children = this.props.children.map((child) => {
      if (child.type == Input) {
        return (
          <View style={{flexDirection:'row', flex: 1, marginRight: 10}}>
            <Input editable={false} value={formatDate(this.state.date)} onPress={() => this._handleOnFocus()}/>
            <Input style={{textAlign: 'right'}} editable={false} value={formatTime(this.state.date)} onPress={() => this._handleOnFocus()} />
          </View>
        )
      }
      return child;
    });

    return (
      <View>
        <Item {...this.props}>
          {children}
        </Item>
        {renderPicker()}
      </View>
    )
  }

  renderPicker() {
    if (state.visibleElement == 'date') {
      return (
        <DatePickerAndroid
          date={this.state.date}
          onDateChange={(date) => this._handleOnDatetimeChange(date)}
        />
      )
    } else if (state.visibleElement == 'time') {
      return (
        <DatePickerAndroid
          date={this.state.date}
          onDateChange={(date) => this._handleOnDatetimeChange(date)}
        />
      )
    }

    return nil;
  }

  _handleOnFocus() {
    this.setState({visible: !this.state.visible});
  }

  _handleOnDatetimeChange(date) {
    this.setState({date: date});
    this.props.onDatetimeChange(date);
  }
}

DateTimeInputItem.propTypes = {
  onDatetimeChange: PropTypes.func,
}

export default DateTimeInputItem;
