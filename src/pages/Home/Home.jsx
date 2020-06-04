import React from 'react';
import axios from 'axios';

export default class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    axios.get('/pokemon/Plist')
      .then(function (response) {
        // handle success
        console.log(response);
      })
  }

  render() {
    return (
      <div>1</div>
    )
  }
}