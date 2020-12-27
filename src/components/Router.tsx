import { BrowserRouter, Switch, Route } from "react-router-dom"
import Input from "../routes/Input"

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Input />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Router
