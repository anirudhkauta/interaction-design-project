import React, { PropTypes } from 'react';
import {
  DatePickerAndroid,
  TimePickerAndroid,
  View,
} from 'react-native'
import { Container, Title, Content, Item, Input } from 'native-base';
import { formatDateRaw, formatTime } from '../../api/datetime';

class DateTimeInputItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibleElement: 'none', // 'date' | 'time' | 'none'
      // date: new Date(),
    }
  }


  render() {
    //Add extra props to input element, keep other children the same.
    const children = this.props.children.map((child) => {
      if (child.type == Input) {
        return (
          <View style={{flexDirection:'row', flex: 1, marginRight: 10}}>
            <Input style={{flexGrow: 2}} editable={false} value={formatDateRaw(this.props.value)} onPress={() => this._handleOnFocus()}/>
            <Input style={{textAlign: 'right'}} editable={false} value={formatTime(this.props.value)} onPress={() => this._handleOnFocus()} />
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
        {this.renderPicker()}
      </View>
    )
  }

  renderPicker() {
    if (this.state.visibleElement == 'date') {
      return (
        <DatePickerAndroid
          date={this.props.value}
          onDateChange={(date) => this.props.onDatetimeChange(date)}
        />
      )
    } else if (this.state.visibleElement == 'time') {
      return (
        <TimePickerAndroid
          date={this.props.value}
          onDateChange={(date) => this.props.onDatetimeChange(date)}
        />
      )
    }

    return null;
  }

  _handleOnFocus() {
    this.setState({visible: !this.state.visible});
  }

  // _handleOnDatetimeChange(date) {
  //   this.setState({date: date});
  //   this.props.onDatetimeChange(date);
  // }
}

DateTimeInputItem.propTypes = {
  value: PropTypes.instanceOf(Date),
  onDatetimeChange: PropTypes.func,
  minimumDate: PropTypes.instanceOf(Date),//unimplemented TODO
}

export default DateTimeInputItem;
