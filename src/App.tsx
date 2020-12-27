import React from "react"
import Header from "components/Header"
import { createMuiTheme, createStyles, makeStyles, Theme, ThemeProvider } from "@material-ui/core"
import "styles/styles.scss"
import Main from "routes/Main"

const theme = createMuiTheme({
  typography: {
    fontFamily: "Noto Sans KR, sans-serif",
  },
})

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    app: {
      backgroundColor: "#f0f0f0",
      minHeight: "100vh",
    },
  })
)

const App = () => {
  const classes = useStyles()
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.app}>
        <Header />
        <Main />
      </div>
    </ThemeProvider>
  )
}

export default App
