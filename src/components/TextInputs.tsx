import React, { useEffect, useState } from "react"
import { Box, Grid, Paper, Snackbar, Typography } from "@material-ui/core"
import Alert from "@material-ui/lab/Alert"

// Icons
import AddIcon from "@material-ui/icons/Add"
import HelpOutlineIcon from "@material-ui/icons/HelpOutline"
import RemoveIcon from "@material-ui/icons/Remove"

// Components
import HelpDialog from "components/HelpDialog"
import TextInput from "components/TextInput"
import IconButtonWithTooltip from "components/IconButtonWithTooltip"

// Hooks
import useStyles from "hooks/useStyles"
import useLocalStorage from "hooks/useLocalStorage"

interface TextInputsProps {
  min?: number
  title: string
  label: string
  description?: string
  dataKey: string //Key for localStorage Values
}

const TextInputs = ({ min = 1, title, label, description = "", dataKey }: TextInputsProps) => {
  console.log({ min, dataKey, title, label })
  const classes = useStyles()
  const [warning, setWarning] = useState(false)
  const [helpOpen, setHelpOpen] = useState(false)
  const localData = useLocalStorage(dataKey)
  const [values, setValues] = useState(Array(min).fill(""))
  const onWarningClose = (event: React.SyntheticEvent<Element, Event>) => {
    setWarning(false)
  }

  const onAddClick = () => {
    setValues([...values, ""])
  }
  const onRemoveClick = () => {
    if (values.length > min) {
      setValues(values.slice(0, values.length - 1))
    } else {
      setWarning(true)
    }
  }
  const onHelpClick = () => {
    setHelpOpen(true)
  }

  const setNameByIndex = (index: number, value: string) => {
    setValues(values.map((prev, i) => (i === index ? value : prev)))
  }
  const handleHelpClose = () => {
    setHelpOpen(false)
  }

  // For Debug
  useEffect(() => {
    console.log(dataKey)
    console.log(values)
    localData.set(values)
  }, [values])

  return (
    <Paper elevation={3} className={classes.paper}>
      <Grid container spacing={2} direction="column">
        <Grid item>
          <Box className={classes.box}>
            <Typography variant="h6" className={classes.title}>
              {title}
            </Typography>
            <IconButtonWithTooltip title="추가" onClick={onAddClick} icon={<AddIcon />} />
            <IconButtonWithTooltip title="삭제" onClick={onRemoveClick} icon={<RemoveIcon />} />
            <IconButtonWithTooltip title="도움말" onClick={onHelpClick} icon={<HelpOutlineIcon />} />
            {description && (
              <HelpDialog open={helpOpen} handleClose={handleHelpClose} title={`${title}`} text={description} />
            )}
          </Box>
        </Grid>
        {Array.from(values).map((value, index) => (
          <TextInput key={`name_${index}`} label={label} value={value} setName={setNameByIndex} index={index} />
        ))}
      </Grid>
      <Snackbar open={warning} autoHideDuration={3000} onClose={onWarningClose}>
        <Alert onClose={onWarningClose} severity="warning" elevation={6} variant="filled">
          최소 {min}개의 {label}이 필요합니다.
        </Alert>
      </Snackbar>
    </Paper>
  )
}
export default TextInputs
