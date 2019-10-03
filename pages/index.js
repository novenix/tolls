"use strict";
import React from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/basepage";
import UniversitySearchForm from "../components/universities/searchU";
import SearchSelector from "../components/universities/selector";
import { Router } from "../routes";
class Index extends React.Component {
  // para un feetch en axios
  constructor(props) {
    super(props);
    //this.roles=["React.js y Next,js Front-end developer ","Node.js Back-end Developer","React-Native"]
    this.sub=this.sub.bind(this)
  }
  sub(){
    Router.pushRoute('/menu')
  }
  render() {
    // const { isAuthenticated, user }=this.props.auth;
    console.log("holi");
    return (
      <BaseLayout className="cover" headerType="index">
        <BasePage >
        <SearchSelector nam="Area" onSubmit={this.sub} />
        </BasePage>
      </BaseLayout>
    );
  }
}
export default Index;
