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

const EducationList = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const experienceItems = {
    "Scaled Agile, Inc.": {
      title: "Certified SAFe 6 Agilist @",
      duration: "MAR 2024",
      desc: [
        "Earned the credential from Scaled Agile, Inc., demonstrating a solid understanding of Lean-Agile principles and the ability to lead agile transformations at enterprise scale."
      ]
    },
    "Scrum.org": {
      title: "Professional Scrum Master I @",
      duration: "JAN 2024",
      desc: [
        "Certified in the fundamentals of the Scrum framework, including roles, events, and artifacts.",
        "Confirmed the ability to support agile teams, remove impediments, and foster a collaborative and adaptive work environment."
      ]
    },
    "British Council": {
      title: "IELTS 7.0 @",
      duration: "JAN 2015",
      desc: [
        "Successfully completed the IELTS Academic exam with an overall band score of 7.0, demonstrating full professional proficiency in English across listening, reading, writing, and speaking skills."
      ]
    },
    "Politecnico di Torino": {
      title: "Software Engineering @",
      duration: "SEP 2012 - DEC 2018",
      desc: [
        "Completed a full academic path in Computer and Software Engineering, combining solid theoretical foundations with practical experience in modern development methodologies.",
        "During the Master’s, worked on a research thesis in collaboration with Altec S.p.A., focused on using deep neural networks to predict geomagnetic events caused by solar activity, leveraging on satellite and Earth-based sensor data.",
        "Designed and developed BeeShare, a mobile Android app aimed at simplifying group expense management. The app allowed users to track, split, and settle shared costs in a user-friendly and efficient way."
      ]
    },
    "IIS Luigi Di Savoia": {
      title: "IT Specialist @",
      duration: "SEP 2012 - DEC 2018",
      desc: [
        "Graduated as a computer science specialist with a focus on programming, systems architecture, and database design.",
        "Took part to the Turin Machine Cup at Univerisity of Pisa writing running programs for the Turing Machine to solve the competition's proposed problems."
      ]
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
          <span className="educationlist-title">
            {experienceItems[key]["title"] + " "}
          </span>
          <span className="educationlist-organization">{key}</span>
          <div className="educationlist-duration">
            {experienceItems[key]["duration"]}
          </div>
          <ul className="education-description">
            {experienceItems[key]["desc"].map(function (descItem, i) {
              return (
                <FadeInSection delay={`${i + 1}00ms`}>
                  <li key={i}>{descItem}</li>
                </FadeInSection>
              );
            })}
          </ul>
        </TabPanel>
      ))}
    </div>
  );
};

export default EducationList;
