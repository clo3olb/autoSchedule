import { makeStyles, createStyles, Theme } from "@material-ui/core/styles"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    app: {
      minHeight: "100vh",
      backgroundColor: "#f0f0f0",
    },
    header: {
      width: "100%",
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(1),
    },
    pageContainer: {
      padding: theme.spacing(2),
      flexGrow: 1,
    },

    container: {
      flexGrow: 1,
      padding: theme.spacing(2),
    },
    stageTitle: {
      marginBottom: theme.spacing(2),
    },
    padding: {
      padding: theme.spacing(2),
    },
    paper: {
      padding: theme.spacing(2),
      flexGrow: 1,
    },
    title: {
      display: "inline-block",
      flexGrow: 1,
    },
    box: {
      display: "flex",
      alignItems: "center",
    },
  })
)

export default useStyles
