import { Grid } from "@material-ui/core"
import TextInputs from "components/TextInputs"
import DurationInput from "components/DurationInput"
import useStyles from "hooks/useStyles"

const Input = () => {
  const classes = useStyles()

  return (
    <Grid container justify="center" spacing={2}>
      <Grid item className={classes.container}>
        <TextInputs
          dataKey={"names"}
          min={2}
          title="근무자 명단"
          label="이름"
          description="근무를 하게 될 사람들의 이름 목록입니다."
        />
      </Grid>
      <Grid item className={classes.container}>
        <TextInputs dataKey="works" min={1} title="근무 종류" label="근무 명" description="모든 근무를 작성합니다.." />
      </Grid>
      <Grid item className={classes.container}>
        <TextInputs
          dataKey="dayTypes"
          min={1}
          title="근무 형태"
          label="별명"
          description="토요일, 일요일과 같이 형식이 다른 형태의 근무일이 있는 경우에 여러 근무형태를 작성합니다. ex) 토요일, 일요일, 공휴일 등"
        />
      </Grid>
      <Grid item className={classes.container}>
        <DurationInput dataKey="duration" />
      </Grid>
    </Grid>
  )
}

export default Input
