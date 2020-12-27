import React from "react"
import { Box, Stepper, Step, StepLabel, Button, Typography, Grid, Container, AppBar } from "@material-ui/core"
import useStyles from "hooks/useStyles"

const Header = () => {
  const classes = useStyles()
  const [activeStep, setActiveStep] = React.useState(0)
  const steps = ["기본 정보 입력", "근무일 형태지정", "근무날짜 지정", "근무자 확인"]

  const handleNext = () => {
    if (activeStep < steps.length) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1)
    }
  }

  const handleBack = () => {
    if (activeStep > 0) {
      setActiveStep((prevActiveStep) => prevActiveStep - 1)
    }
  }

  const handleReset = () => {
    setActiveStep(0)
  }

  return (
    <AppBar position="sticky" className={classes.header}>
      <Container>
        <Grid
          container
          style={{ paddingLeft: 0, paddingRight: 0, paddingBottom: 0 }}
          alignItems="center"
          justify="space-between"
          className={classes.padding}
        >
          <Typography variant="h6" className={classes.title} color="textPrimary">
            AutoSchedule
          </Typography>
          <Button onClick={handleBack}>Back</Button>
          <Button onClick={handleNext} color="primary">
            Next
          </Button>
        </Grid>
        <Stepper activeStep={activeStep} style={{ paddingLeft: 0, paddingRight: 0 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Container>
    </AppBar>
  )
}

export default Header
