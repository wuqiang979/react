// var React = require("react");
import React from 'react';
export default class BodyChild extends React.Component{
  render(){
    return(
      <div>
        <p>子页面输入: <input type="text" onChange={this.props.handleChildValueChang}/></p>
      </div>
    );
  }
}
