import React from 'react';
import {
  Animated,
  Easing,
  View
} from 'react-native';

export default class FadeInUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opacity: new Animated.Value(0),
      yPos: new Animated.Value(25),
    };
  }

  render() {
    const style = {
      opacity: this.state.opacity,
      transform: [{
        translateY: this.state.yPos
      }]
    }
    return (
      <Animated.View style={style}>
        {this.props.children}
      </Animated.View>
    );
  }

  componentDidMount() {
    Animated.timing(
      this.state.opacity,
      {
        toValue: 1,
        duration: 150,
        easing: Easing.out(Easing.quad),
        // delay: 3000,
      }
    ).start();
    Animated.timing(
      this.state.yPos,
      {
        toValue: 0,
        duration: 150,
        easing: Easing.out(Easing.quad),
        // delay: 3000,
      }
    ).start();
  }
}
