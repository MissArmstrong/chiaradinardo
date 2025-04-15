import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";

class About extends React.Component {
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
    const one = (
      <p>
        I am currently a <b>Software Development Engineer</b> at
        <a href="https://group.intesasanpaolo.com/en/"> Intesa Sanpaolo</a>, working in the Group Technology
        sector under Credits team.
      </p>
    );
    const two = (
      <p>
        From consulting gigs to backend leadership in fast-paced projects, I’ve seen a bit of everything.
        Now I’m aiming to grow into more strategic roles—without losing touch with the tech I love.
      </p>
    );
    const three = (
        <p>
          Outside of work? Gym, books, friends, and the outdoors keep me grounded.
        </p>
    );

    const tech_stack = [
      "Spring Framework",
      "Hibernate ORM",
      "Java EE",
      "SQL",
      "Python",
      "AWS"
    ];

    return (
      <div id="about">
        <FadeInSection>
          <div className="section-header ">
            <span className="section-title">/ about me</span>
          </div>
          <div className="about-content">
            <div className="about-description">
              {[one]}
              {"Here are some technologies I have been working with:"}
              <ul className="tech-stack">
                {tech_stack.map(function (tech_item, i) {
                  return (
                    <FadeInSection delay={`${i + 1}00ms`}>
                      <li>{tech_item}</li>
                    </FadeInSection>
                  );
                })}
              </ul>
              {[two]}
              {[three]}
            </div>
            <div className="about-image">
              <img alt="Chiara Di Nardo" src={"/assets/chiara2.jpg"} />
            </div>
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default About;
