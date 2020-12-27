import React, { useEffect, useState } from "react"
import { Box, Grid, Paper, Typography } from "@material-ui/core"
import DateFnsUtils from "@date-io/date-fns"
import koLocale from "date-fns/locale/ko"
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers"
import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date"
import HelpDialog from "./HelpDialog"

//Hooks
import useStyles from "hooks/useStyles"

// Icon
import HelpOutlineIcon from "@material-ui/icons/HelpOutline"
import IconButtonWithTooltip from "components/IconButtonWithTooltip"
import useLocalStorage from "hooks/useLocalStorage"

interface DurationInputProps {
  dataKey: string
}

const DurationInput = ({ dataKey }: DurationInputProps) => {
  const classes = useStyles()
  const [helpOpen, setHelpOpen] = useState(false)
  const [start, setStart] = useState<any>(new Date())
  const [end, setEnd] = useState<any>(new Date())
  const localDataStart = useLocalStorage(`${dataKey}Start`)
  const localDataEnd = useLocalStorage(`${dataKey}End`)

  const onStartChange = (date: MaterialUiPickersDate) => {
    setStart(date)
  }
  const onEndChange = (date: MaterialUiPickersDate) => {
    setEnd(date)
  }

  const onHelpClick = () => {
    setHelpOpen(true)
  }

  const handleHelpClose = () => {
    setHelpOpen(false)
  }

  useEffect(() => {
    localDataStart.set(start)
    localDataEnd.set(end)
  }, [start, end])
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils} locale={koLocale}>
      <Paper elevation={3} className={classes.paper}>
        <Grid container spacing={2} direction="column">
          <Grid item>
            <Box className={classes.box}>
              <Typography variant="h6" className={classes.title}>
                기간 입력
              </Typography>
              <IconButtonWithTooltip title="도움말" onClick={onHelpClick} icon={<HelpOutlineIcon />} />
              <HelpDialog
                open={helpOpen}
                handleClose={handleHelpClose}
                title="기간 설정"
                text="시작 날짜와 종료 날짜를 선택합니다. 시작 날짜는 종료 날짜보다 이전이어야 하며, 종료 날짜는 시작 날짜보다 이후여야 합니다."
              />
            </Box>
          </Grid>
          <Grid item>
            <DatePicker
              label="시작 날짜"
              disablePast
              maxDate={end}
              value={start}
              onChange={onStartChange}
              animateYearScrolling
            />
          </Grid>
          <Grid item>
            <DatePicker
              disablePast
              label="종료 날짜"
              minDate={start}
              value={end}
              onChange={onEndChange}
              animateYearScrolling
            />
          </Grid>
        </Grid>
      </Paper>
    </MuiPickersUtilsProvider>
  )
}
export default DurationInput
