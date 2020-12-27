import {
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
  Button,
  Container,
  Divider,
  Typography,
} from "@material-ui/core"
import React from "react"

import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import Input from "routes/Input"
import useStyles from "hooks/useStyles"

// Main would merge all the stage it needs to provide the AutoSchedule Service.

const Main = () => {
  const classes = useStyles()
  return (
    <Container className={classes.padding} maxWidth="lg">
      {/* Stage 1: getting initial inputs */}
      <Accordion expanded={true}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
          <Typography variant="h5">기본 정보 입력</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Input />
        </AccordionDetails>
        <Divider />
        <AccordionActions>
          <Button size="small" color="primary">
            Next
          </Button>
        </AccordionActions>
      </Accordion>
      <Accordion expanded={true}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
          <Typography variant="h5">근무일 형태 지정</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Input />
        </AccordionDetails>
        <Divider />
        <AccordionActions>
          <Button size="small" color="primary">
            Next
          </Button>
        </AccordionActions>
      </Accordion>
    </Container>
  )
}

export default Main
