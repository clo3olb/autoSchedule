import { Box, Container, Typography } from "@material-ui/core"
import React from "react"

import Input from "routes/Input"
import useStyles from "hooks/useStyles"

// Main would merge all the stage it needs to provide the AutoSchedule Service.

const Main = () => {
  const classes = useStyles()
  return (
    <Box className={classes.pageContainer}>
      <Container maxWidth="lg">
        {/* Stage 1: getting initial inputs */}
        <Typography variant="h5" className={classes.stageTitle}>
          기본 정보 입력
        </Typography>
        <Input />
      </Container>
    </Box>
  )
}

export default Main
