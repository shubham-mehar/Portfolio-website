import  './Page2Styles.css';
import React, { Component } from 'react';

class Page2 extends Component {
  render()
  {
    return (
      <div className='page2-img'>
        <div className='heading'>
          <h1>{this.props.heading}</h1>
          <p>{this.props.text}</p>
        </div>
      </div>
    )
  }

}

export default Page2;