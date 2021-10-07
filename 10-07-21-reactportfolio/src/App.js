import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

const App = () => {
  return (
    <Router>
       <div>
         <Switch>
           <Route exact path='/'>
             <h1>My Home Page</h1>
           </Route>
         </Switch>
       </div>
    </Router>
  )
}

export default App
