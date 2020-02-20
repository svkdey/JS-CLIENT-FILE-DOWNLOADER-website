import React from "react";
import "./App.css";
import $ from "jquery";
import LandingPage from "./Components/LandingPage";
import Demo from "./Components/Demo";
import Documentation from "./Components/Documentation";
// import { useColorMode, Button } from '@chakra-ui/core';

class App extends React.Component {
  // componentWillMount() {
  //   $(".btn").on("click", function(event) {
  //     if (this.hash !== "") {
  //       event.preventDefault();

  //       const hash = this.hash;

  //       $("html, body").animate(
  //         {
  //           scrollTop: $(hash).offset().top
  //         },
  //         800
  //       );
  //     }
  //   });
  // }
  render() {
    return (
      <div>
        <LandingPage />
        <Demo />
        <Documentation />
      </div>
    );
  }
}

export default App;
