import React from 'react';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

class indexLayout extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    )
  }

}

export default indexLayout;