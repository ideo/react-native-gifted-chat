import React from 'react';
import {
  Image,
  StyleSheet,
  View,
} from 'react-native';

export default class MessageImage extends React.Component {
  render() {
    return (
      <View style={[styles.container, this.props.containerStyle]}>
        <Image
          style={[styles.image, this.props.imageStyle]}
          source={{uri: this.props.currentMessage.image}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    borderTopLeftRadius: 13,
    borderTopRightRadius: 13,
    overflow: 'hidden'
  },
  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 3,
    right: 0,
    resizeMode: 'cover',
  },
});

MessageImage.defaultProps = {
  currentMessage: {
    image: null,
  },
  containerStyle: {},
  imageStyle: {},
};

MessageImage.propTypes = {
  currentMessage: React.PropTypes.object,
  containerStyle: View.propTypes.style,
  imageStyle: Image.propTypes.style,
};
