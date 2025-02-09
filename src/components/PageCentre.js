import './ProjectBgImgStyle.css';

import React, { Component } from 'react'

//we need to change to class component
class PageCentre extends Component{

  constructor(props) {
    super(props);  // ✅ Always call super(props) in class components
  }

  //this was needed or the props were not getting passed.
  render(){
    return (
      <div className="main-center">
          <div className="heading">
              <h1>{this.props.heading}</h1>
              <p>{this.props.text}</p>
          </div>
        
      </div>
    )
  }
}

export default PageCentre;
