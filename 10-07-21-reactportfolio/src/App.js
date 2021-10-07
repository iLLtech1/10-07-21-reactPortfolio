import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import Contact from './pages/Contact'

const users = ['Chris L', 'iLLtech', 'The', 'Cutter']

const App = () => {
  return (
    <Router>
       <div>
         <nav>
           <Link to='/'>
             Home
           </Link>
           <Link to='/contact'>
             Contact
           </Link>
         </nav>
         <Switch>
           <Route exact path='/'>
             <h1>My Home Page Fo Shizzle</h1>
           </Route>
           <Route path='/contact'>
             <Contact />
           </Route>
         </Switch>
       </div>
    </Router>
  )
}

export default App
