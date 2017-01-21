import React from 'react';
import {
  Platform,
  StyleSheet,
  TextInput,
} from 'react-native';

export default class Composer extends React.Component {
  render() {
    console.log(this.props.composer);
    return (
      <TextInput
        ref={(ref) => { this.props.getComposerRef(ref); }}
        placeholder={this.props.placeholder}
        placeholderTextColor={this.props.placeholderTextColor}
        multiline={this.props.multiline}
        onChange={(e) => {
          this.props.onChange(e);
        }}
        style={[styles.textInput, this.props.textInputStyle, {
          height: this.props.composerHeight,
        }]}
        value={this.props.text}
        accessibilityLabel={this.props.text || this.props.placeholder}
        enablesReturnKeyAutomatically={true}
        underlineColorAndroid="transparent"
        editable={this.props.editable}
        blurOnSubmit={true}
        autoCapitalize={'none'}
        onSubmitEditing={() => {
          this.props.onSend({text: this.props.text}, true);
        }}
        returnKeyType={'send'}
        {...this.props.textInputProps}
      />
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    flex: 1,
    marginLeft: 5,
    fontSize: 18,
    lineHeight: 21,
    marginTop: 0,
    // marginBottom: 5,
  },
});

Composer.defaultProps = {
  onChange: () => {},
  composerHeight: Platform.select({
    ios: 33,
    android: 41,
  }), // TODO SHARE with GiftedChat.js and tests
  text: '',
  placeholder: 'Type a message...',
  placeholderTextColor: '#b2b2b2',
  textInputProps: null,
  multiline: true,
  textInputStyle: {},
  editable: true
};

Composer.propTypes = {
  onChange: React.PropTypes.func,
  composerHeight: React.PropTypes.number,
  text: React.PropTypes.string,
  placeholder: React.PropTypes.string,
  placeholderTextColor: React.PropTypes.string,
  textInputProps: React.PropTypes.object,
  multiline: React.PropTypes.bool,
  textInputStyle: TextInput.propTypes.style,
  editable: React.PropTypes.bool.isRequired
};
