"use strict";
import React from "react";
import Accept from '../components/dragNdrop/dragNdrop'
import { Router } from "../routes";

class Index extends React.Component {
  // para un feetch en axios
  constructor(props) {
    super(props);
    //this.roles=["React.js y Next,js Front-end developer ","Node.js Back-end Developer","React-Native"]
    // this.sub=this.sub.bind(this)
  }
  
  render() {
    // const { isAuthenticated, user }=this.props.auth;
    console.log("holi");
    return (
      <Accept  />
    );
  }
}
export default Index;
