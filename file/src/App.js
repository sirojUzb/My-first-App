import React, { Component } from "react";
// import ButtonComponent from "./styledComponent/Button";
import { ThemeProvider } from "styled-components";
import Lesson19 from "./Lesson19";
// import JulyAQ from "./27-iyulSavolJavob";
// import FunctionalComp from "./functionalComp";
// import Lesson6 from "./Lesson/Lesson6";
// import Lesson16 from "./Lesson16";
// import Lesson4 from "./Lesson4";
// import Cootels from "./cootels";

const theme = {
  darkMode: {
    primaryBackgroundColor: "#000",
    primaryTextColor: "#fff",
  },
  lightMode: {
    primaryBackgroundColor: "#fff",
    primaryTextColor: "#000",
  },
};
export default class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div>
          {/* <ButtonComponent /> */}
          {/* <Cootels /> */}
          {/* <JulyAQ /> */}
          {/* <FunctionalComp /> */}
          {/* <Lesson6 /> */}
          {/* <Lesson16 /> */}
          {/* <Lesson4 /> */}
          <Lesson19 />
        </div>
      </ThemeProvider>
    );
  }
}
