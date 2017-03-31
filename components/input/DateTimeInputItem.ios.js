import React, { PropTypes } from 'react';
import {
  DatePickerIOS,
  View,
} from 'react-native'
import { Container, Title, Content, Item, Input } from 'native-base';

import { formatDate, formatTime } from '../../api/datetime';

class DateTimeInputItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      // date: new Date(),
    }
  }


  render() {
    //Add extra props to input element, keep other children the same.
    const children = this.props.children.map((child) => {
      if (child.type == Input) {
        return (
          <View style={{flexDirection:'row', flex: 1, marginRight: 10}}>
            <Input style={{flexGrow: 2}} editable={false} value={formatDate(this.props.value)} />
            <Input style={{textAlign: 'right'}} editable={false} value={formatTime(this.props.value)} />
          </View>
        )
      }
      return child;
    });

    //Native datepicker
    const datetimePicker = (
      <DatePickerIOS
        date={this.props.value}
        mode="datetime"
        onDateChange={(date) => this.props.onDatetimeChange(date)}
        minuteInterval={5}
      />
    )

    return (
      <View>
        <Item {...this.props} onPress={() => this._handleOnFocus()}>
          {children}
        </Item>
        {this.state.visible && datetimePicker}
      </View>
    )
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
