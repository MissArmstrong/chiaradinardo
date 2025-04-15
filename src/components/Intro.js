import React from "react";

import "../styles/Intro.css";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import FadeInSection from "./FadeInSection";
import FractalTree from "./FractalTree";

class Intro extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1",
      visible: true,
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey,
    });
  }
  render() {
    return (
      <div id="intro">
        {/*<FractalTree></FractalTree>*/}
        <Typist avgTypingDelay={120}>
          <span className="intro-title">
            {"hi, welcome to "}
            <span className="intro-name">{"chiara"}</span>
            {"'s space."}
          </span>
        </Typist>
        <FadeInSection>
          {/*<div className="intro-subtitle">I create stuff sometimes.</div>*/}
          <div className="intro-desc">
            I'm a curious software engineer from Torino, Italia, with a love for clean code, teamwork, and turning ideas into real stuff.
          </div>
          <a
            href="mailto:dinardo.chiara@libero.it"
            className="intro-contact"
          >
            <EmailRoundedIcon></EmailRoundedIcon>
            {" Say hi!"}
          </a>
        </FadeInSection>
      </div>
    );
  }
}

export default Intro;
