import React from 'react';
import Ajax from '@/apiservice/service.js';


export default class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const dataSource = Ajax({
      url: 'More_Pokemons', data: {
        pno: 2
      }
    }).then((data) => {
      console.log(data)
    })
  }

  render() {
    return (
      <div>1</div>
    )
  }
}