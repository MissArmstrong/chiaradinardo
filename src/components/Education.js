import React from "react";
import EducationList from "./EducationList";
import "../styles/Education.css";
import FadeInSection from "./FadeInSection";

class Education extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {
    return (
      <div id="education">
        <FadeInSection>
          <div className="section-header">
            <span className="section-title">/ education</span>
          </div>
          <EducationList></EducationList>
        </FadeInSection>
      </div>
    );
  }
}

export default Education;
