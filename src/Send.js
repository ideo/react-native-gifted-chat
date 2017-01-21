import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default class Send extends React.Component {
  // shouldComponentUpdate(nextProps, nextState) {
  //   if (this.props.text.trim().length === 0 && nextProps.text.trim().length > 0 || this.props.text.trim().length > 0 && nextProps.text.trim().length === 0) {
  //     return true;
  //   }
  //   return false;
  // }
  render() {
    const hasText = this.props.text.trim().length > 0;

    // if(hasText) {
      return (
        <TouchableOpacity
          style={[styles.container]}
          onPress={() => {
            this.props.blurComposer();
            hasText && this.props.onSend({text: this.props.text.trim()}, true);
          }}
          accessibilityTraits="button"
        >
          <Text style={[styles.text, this.props.textStyle, !hasText && styles.textDisabled]}>{this.props.label}</Text>
        </TouchableOpacity>
      );
    // }
    // return <View/>;
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    marginBottom: 7,
    marginRight: 10,
  },
  text: {
    color: '#19CCEF',
    // fontWeight: '600',
    fontSize: 18,
    backgroundColor: 'transparent',
  },
  textDisabled: {
    color: '#C7C7CC'
  }
});

Send.defaultProps = {
  text: '',
  onSend: () => {},
  label: 'Send',
  containerStyle: {},
  textStyle: {},
};

Send.propTypes = {
  text: React.PropTypes.string,
  onSend: React.PropTypes.func,
  label: React.PropTypes.string,
  containerStyle: View.propTypes.style,
  textStyle: Text.propTypes.style,
};
