import React, { Component } from "react";
import { Image } from "react-native";
import Globals from "../../Ressources/Globals";

export default class ProgressiveImage extends Component {
  state = { showDefault: true, error: false };
  render() {
    var image = this.state.showDefault
      ? Globals.IMAGES.PLACEHOLDER
      : this.state.error
      ?Globals.IMAGES.PLACEHOLDER
      : { uri: this.props.uri };
    return (
      <Image
        style={this.props.style}
        source={image}
        onLoad={() => this.setState({ showDefault: false })}
        onError={() => this.setState({ error: true })}
        resizeMode="cover"
      />
    );
  }
}
