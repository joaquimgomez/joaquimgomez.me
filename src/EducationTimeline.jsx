import * as React from 'react';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineOppositeContent, TimelineDot } from '@mui/lab'
import { Typography } from '@mui/material';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  oppositeContent: {
    margin: "auto 0"
  }
}));

export default function EducationTimeline() {
  const classes = useStyles();

  return (
    <Timeline>
      <TimelineItem>
        <TimelineOppositeContent
          className={classes.oppositeContent}
          align="right"
          variant="body1"
        >
          04/2021 - Currently
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
            <TimelineDot variant="outlined" color="primary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '30px', px: 2 }}>
          <Typography variant="h6" component="span">
            Technische Universität München (TUM)
          </Typography>
          <Typography>MSc Data Engineering and Analytics</Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent
          className={classes.oppositeContent}
          align="right"
          variant="body2"
        >
          09/2016 - 01/2021
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
            <TimelineDot variant="outlined" color="info" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '30px', px: 2 }}>
          <Typography variant="h6" component="span">
            Universitat Politècnica de Catalunya (UPC)
          </Typography>
          <Typography>BSc Informatics Engineering (Major in Computer Science)</Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent
          className={classes.oppositeContent}
          align="right"
          variant="body1"
        >
          09/2014 - 06/2016
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
            <TimelineDot variant="outlined" color="grey" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '30px', px: 2 }}>
          <Typography variant="h6" component="span">
            Institut Severo Ochoa (Esplugues de Llobregat)
          </Typography>
          <Typography>High School Diploma (Specialization in Technology)</Typography>
        </TimelineContent>
      </TimelineItem>

    </Timeline>
  )
}
