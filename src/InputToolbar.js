import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import Composer from './Composer';
import Send from './Send';

export default class InputToolbar extends React.Component {
  constructor(props) {
    super(props);
    this._composerRef = null;
  }
  renderActions() {
    if (this.props.renderActions) {
      return this.props.renderActions(this.props);
    }
    return null;
  }

  renderVoiceRecorder() {
    if(this.props.renderVoiceRecorder) {
      return this.props.renderVoiceRecorder(this.props);
    }
    return null;
  }

  renderSend() {
    if (this.props.renderSend) {
      return this.props.renderSend(this.props);
    }
    return <Send blurComposer={this._blurComposer} {...this.props}/>;
  }

  renderComposer = () => {
    const composerProps = {
      ...this.props,
      getComposerRef: this._getComposerRef
    }

    if (this.props.renderComposer) {
      return this.props.renderComposer(composerProps);
    }

    return (
      <Composer
        {...composerProps}
      />
    );
  }

  renderAccessory() {
    if (this.props.renderAccessory) {
      return (
        <View style={[styles.accessory, this.props.accessoryStyle]}>
          {this.props.renderAccessory(this.props)}
        </View>
      );
    }
    return null;
  }

  render() {
    return (
      <View style={[styles.container, this.props.containerStyle]}>
        <View style={[styles.primary, this.props.primaryStyle]}>
          {/*this.renderActions()*/}
          {this.renderVoiceRecorder()}
          {this.renderComposer()}
          {this.renderSend()}
        </View>
        {/*this.renderAccessory()*/}
      </View>
    );
  }

  _blurComposer = () => {
    this._composerRef.blur();
  }
  _getComposerRef = (ref) => {
    this._composerRef = ref;
  }
}

const styles = StyleSheet.create({
  container: {

  },
  primary: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  accessory: {
    height: 44,
  },
});

InputToolbar.defaultProps = {
  renderAccessory: null,
  renderActions: null,
  renderSend: null,
  renderComposer: null,
  containerStyle: {},
  primaryStyle: {},
  accessoryStyle: {},
};

InputToolbar.propTypes = {
  renderAccessory: React.PropTypes.func,
  renderActions: React.PropTypes.func,
  renderSend: React.PropTypes.func,
  renderComposer: React.PropTypes.func,
  containerStyle: View.propTypes.style,
  primaryStyle: View.propTypes.style,
  accessoryStyle: View.propTypes.style,
};
