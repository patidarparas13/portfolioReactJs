import React from 'react';
import Projects from './Components/Projects'
import About from './Components/About'
import Blog from './Components/Blog'
import Home from './Components/Home'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div className="">
      
       <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/projects' component={Projects} />
              <Route path='/blog' component={Blog} />
              <Route path='/about' component={About} />
        </Switch>
    </div>
  );
}

export default App;
