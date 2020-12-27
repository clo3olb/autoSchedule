import { makeStyles, createStyles, Theme } from "@material-ui/core/styles"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      flexGrow: 1,
      padding: theme.spacing(2),
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
