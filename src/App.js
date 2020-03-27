import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Navigation from './components/Navigation';
import Api from './components/Api';
import Search from './components/Search';
import { BrowserRouter as Router,Switch,Route  }from 'react-router-dom';

import Navbody from './components/Navbody';
import Jumboo from './components/Jumbo';
import Chart from './components/Chart';
import Footer from './components/Footer';
import Books from './components/Books';
import Movies from './components/Movies';
import Contact from './components/Contact';
import PostList from './components/Youtube';
import Results from './components/Learn';
import Apper from './components/Video';
import Learn from './components/Learn';
import Skills from './components/Skills';

import TabComponent from './components/Tab';
// or

// import { Button } from 'react-bootstrap';
// import Button from 'react-bootstrap/Button'

function App({ match }) {

// import { GoogleLogin } from 'react-google-login';


  return (
     <Router>
       <switch>


  <div className="App">

    <Navigation />


    <Route exact path="/">
    <TabComponent />
    <Jumboo />
    <Footer />
    </Route>


    <Route path='/video' render={props =>

  <div>
{/* <Search /> */}

<Login/>
< Results />
    <Footer />

</div>
} />


    <Route path="/about">
      {/* <Login />
      <Search /> */}
      <Contact />
      <Footer />
    </Route>

    <Route exact path="/data">
 <Skills/>
    </Route>

    <Route path="/Books">
    <Books />
    <Footer />
    </Route>
    <Route path="/learn">
      <Login/>
    {/* < Results />
    <Footer /> */}
    </Route>
    <Route path="/Chart">
    <Chart />
    <Footer />
    </Route>

    <Route path="/movie">
    <Movies />
    <Footer />
    </Route>





</div>

</switch>
</Router>


  );
}
export default App;
