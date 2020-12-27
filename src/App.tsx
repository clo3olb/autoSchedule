import React from "react"
import Header from "components/Header"
import { Box, createMuiTheme, Grid, ThemeProvider } from "@material-ui/core"
import "styles/styles.scss"
import Main from "routes/Main"
import useStyles from "hooks/useStyles"

const theme = createMuiTheme({
  typography: {
    fontFamily: "Noto Sans KR, sans-serif",
  },
})

const App = () => {
  const classes = useStyles()
  return (
    <ThemeProvider theme={theme}>
      <Box className={classes.app}>
        <Header />
        <Main />
      </Box>
    </ThemeProvider>
  )
}

export default App
