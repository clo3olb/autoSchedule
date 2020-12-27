import React from "react"
import { Grid, Grow, InputAdornment, makeStyles, TextField, Theme } from "@material-ui/core"

const useStyles = makeStyles((theme: Theme) => ({
  input: {
    width: "100%",
  },
}))

interface TextInputProps {
  label: string
  value: string
  index: number
  setName: (index: number, value: string) => void
}

const TextInput = ({ label, value, index, setName }: TextInputProps) => {
  const classes = useStyles()
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(index, event.target.value)
  }
  return (
    <Grow in={true}>
      <Grid item>
        <TextField
          className={classes.input}
          onChange={onChange}
          label={label}
          value={value}
          InputProps={{
            startAdornment: <InputAdornment position="start">{index + 1}.&nbsp;</InputAdornment>,
          }}
        />
      </Grid>
    </Grow>
  )
}

export default TextInput
