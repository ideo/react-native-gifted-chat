import React from 'react';
import {
  Animated,
  Easing,
} from 'react-native';

export default class FadeInUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: null,
      opacity: new Animated.Value(0),
      marginTop: new Animated.Value(0),
      translateY: new Animated.Value(0),
      isAnimating: false
    };
  }

  render() {
    const style = {
      opacity: this.state.opacity,
      marginTop: this.state.marginTop,
      marginBottom: this.state.marginBottom,
      transform: [{
        translateY: this.state.translateY
      }]
    }
    return (
      <Animated.View style={style} onLayout={(event) => {
        var {height} = event.nativeEvent.layout;
        this.setState({ height: height });
      }}>
        {this.props.children}
      </Animated.View>
    );
  }

  componentDidUpdate() {
    const height = this.state.height;
    const isAnimating = this.state.isAnimating;
    if(height !== null && !isAnimating) {
      this.setState({
        marginBottom: -this.state.height,
        isAnimating: true
      }, () => {
        const duration = 200;
        const delay = 300;

        Animated.timing(
          this.state.opacity,
          {
            toValue: 1,
            duration: duration,
            easing: Easing.out(Easing.quad),
            delay: delay / 3,
          }
        ).start();

        Animated.timing(
          this.state.marginTop,
          {
            toValue: this.state.height,
            duration: delay,
            easing: Easing.out(Easing.quad),
            delay: 0,
          }
        ).start();

        Animated.timing(
          this.state.translateY,
          {
            toValue: -this.state.height,
            duration: duration,
            easing: Easing.out(Easing.quad),
            delay: delay / 3,
          }
        ).start();
      });
    }
  }
}
