import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

import Nav from './pages/Nav';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Footer from './pages/Footer';

const users = ['Chris L', 'iLLtech', 'The', 'Cutter']

const App = () => {
  const pages = ['about', 'portfolio', 'contact', 'resume']
  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <Router>
       <div>
         <Nav pages={pages} currentPage={currentPage} setCurrentPage={setCurrentPage}></Nav>
         <Switch>
          <Route exact path='/10-07-21-reactportfolio'>
             <h1>My Home Page Fo Shizzle</h1>
           </Route>
          <Route path='/10-07-21-reactportfolio/contact'>
             <Contact />
           </Route>
          <Route path='/10-07-21-reactportfolio/portfolio'>
            <Portfolio/>
          </Route>
          <Route path='/10-07-21-reactportfolio/resume'>
            <Resume />
          </Route>
         </Switch>
         <Footer />
       </div>
    </Router>
  )
}

export default App
