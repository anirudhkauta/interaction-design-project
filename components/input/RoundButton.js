import React, { PropTypes } from 'react';
import { Button } from 'native-base';

class RoundButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      diameter: this.props.diameter,
    }

    if (this.state.diameter == undefined) {
      if (this.props.large) {
        this.state.diameter = 60;
      }else if (this.props.small) {
        this.state.diameter = 30;
      }else{
        this.state.diameter = 45;
      }
    }
  }
  render() {
    // this.props.children.map((child) => {
    //   return child;
    //   // return (
    //   //   <child.type {...child.props} style={{backgroundColor: 'transparent'}}>
    //   //     {child.props.children}
    //   //   </child.type>
    //   // )
    // });

    return (
      <Button {...this.props} style={{justifyContent: 'center',padding:0,width:this.state.diameter,height:this.state.diameter,borderRadius:this.state.diameter/2}}>
        {this.props.children}
      </Button>
    )
  }
}

RoundButton.propTypes = {
  diameter: PropTypes.number,
  large: PropTypes.bool,
  small: PropTypes.bool,
}

export default RoundButton;
