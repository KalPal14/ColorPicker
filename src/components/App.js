import { Route, Switch } from 'react-router-dom'
import Home from './ui/Home'
import ColorPicker from './ColorPicker'

const App = () =>
   <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route path="/picker" component={() =>
         <ColorPicker value={
            {
               R: "0",
               G: "0",
               B: "0"
            }
         }></ColorPicker>}></Route>
   </Switch>

export default App