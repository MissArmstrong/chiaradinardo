import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import FadeInSection from "./FadeInSection";

const isHorizontal = window.innerWidth < 600;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  if (isHorizontal) {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  } else {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  if (isHorizontal) {
    return {
      id: `full-width-tab-${index}`,
      "aria-controls": `full-width-tabpanel-${index}`
    };
  } else {
    return {
      id: `vertical-tab-${index}`
    };
  }
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "theme.palette.background.paper",
    display: "flex",
    height: 300
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`
  }
}));

const ExperienceList = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const experienceItems = {
    "Intesa Sanpaolo": {
      experienceTitle: "Software Development Engineer @",
      duration: "SEP 2024 - PRESENT",
      desc: [
        "Worked as a Software Engineer in Credit division on different projects, involving both frontend and backend developments together with coordinating team members' daily activities to meet the established deadlines."
      ],
      techList: [
          "Springboot",
          "Java"
      ]
    },
    Accenture: {
      experienceTitle: "Digital Business Consultant @",
      duration: "APR 2019 - AUG 2024",
      desc: [
        "Acquired 2 years of experience specializing in the final reviews and developments of a Payment & Service project.",
        "Assumed, in the following years, the role of backend team leader in an Agile Automative project and drove new initiatives from the initial design stages through their daily implementations for the B2C portal."
      ],
      techList: [
        "Springboot",
        "Java"
      ]
    },
    "Teoresi Group": {
      experienceTitle: "Software Engineer @",
      duration: "JUL 2018 - MAR 2019",
      desc: [
        "Involved in both the development of new projects and maintaining the legacy functionalities as an on-site consultant in a leading satellite operator TelCo company."
      ],
      techList: [
        "Springboot",
        "Java"
      ]
    },
    "The World Bank Group": {
      experienceTitle: "IT Analyst Intern @",
      duration: "AUG 2017 - SEP 2017",
      desc: [
        "Selected as one of the interns for the \"Young Women in Technology\" program, collaborated with an international team on a research project focused on the MarkLogic database.",
        "Developed a user-friendly graphical interface (GUI) to enhance accessibility for individuals working with the database."
      ],
      techList: [
        "Springboot",
        "Java"
      ]
    },
    YouDroop: {
      experienceTitle: "Project & DB Manager @",
      duration: "OCT 2015 - SEP 2017",
      desc: [
        "Collaborated with the tech leader to design the database for the e-commerce portal.",
        "Structured the Java project, implemented its initial functionalities and deploy.",
        "As the team expanded, assumed responsibility for managing new team members, effectively organizing their tasks and deadlines to facilitate smooth and successful development processes."
      ],
      techList: [
        "Springboot",
        "Java"
      ]
    },
    "Turing Machine Cup": {
      experienceTitle: "Competitor @",
      duration: "FEB 2011",
      desc: [
        "Wrote running programs for the Turing Machine to solve the competition's proposed problems."
      ],
      techList: []
    }
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation={!isHorizontal ? "vertical" : null}
        variant={isHorizontal ? "fullWidth" : "scrollable"}
        value={value}
        onChange={handleChange}
        className={classes.tabs}
      >
        {Object.keys(experienceItems).map((key, i) => (
          <Tab label={isHorizontal ? `0${i}.` : key} {...a11yProps(i)} />
        ))}
      </Tabs>
      {Object.keys(experienceItems).map((key, i) => (
        <TabPanel value={value} index={i}>
          <span className="experiencelist-experience-title">
            {experienceItems[key]["experienceTitle"] + " "}
          </span>
          <span className="experiencelist-experience-company">{key}</span>
          <div className="experiencelist-duration">
            {experienceItems[key]["duration"]}
          </div>
          <ul className="experience-description">
            {experienceItems[key]["desc"].map(function (descItem, i) {
              return (
                <FadeInSection delay={`${i + 1}00ms`}>
                  <li key={i}>{descItem}</li>
                </FadeInSection>
              );
            })}
          </ul>
          <ul className="experience-tech-stack">
            {experienceItems[key]["techList"].map(function (techItem, i) {
              return (
                  <FadeInSection delay={`${i + 1}00ms`}>
                    <li key={i}>{techItem}</li>
                  </FadeInSection>
              );
            })}
          </ul>
        </TabPanel>
      ))}
    </div>
  );
};

export default ExperienceList;
