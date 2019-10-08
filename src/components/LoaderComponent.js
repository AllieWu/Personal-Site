import React, { Component } from 'react';
import LoadingGif from './../../src/assets/loading.gif'

export default class LoaderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    }
  }
  render() {
    let data;
    if (this.state.loading) {
      data = <img data-src={LoadingGif} alt="Loading Gif" />
    } else {
      data = undefined;
    }
    return (
      <div>
        {data}
      </div>
    )
  }
}