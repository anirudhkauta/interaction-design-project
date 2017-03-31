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
      // date: new Date(),
    }
  }


  render() {
    //Add extra props to input element, keep other children the same.
    const children = this.props.children.map((child) => {
      if (child.type == Input) {
        return (
          <View style={{flexDirection:'row', flex: 1, marginRight: 10}}>
            <Input style={{flexGrow: 2}} editable={false} value={formatDate(this.props.value)} onPress={() => this._handleOnFocus()}/>
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
        {renderPicker()}
      </View>
    )
  }

  renderPicker() {
    if (state.visibleElement == 'date') {
      return (
        <DatePickerAndroid
          date={this.props.value}
          onDateChange={(date) => this.props.onDatetimeChange(date)}
        />
      )
    } else if (state.visibleElement == 'time') {
      return (
        <DatePickerAndroid
          date={this.props.value}
          onDateChange={(date) => this.props.onDatetimeChange(date)}
        />
      )
    }

    return nil;
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
}

export default DateTimeInputItem;
