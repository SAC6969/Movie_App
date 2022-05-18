import React from 'react';
import './App.css';
import Banner from './Components/Banner';
import Navbar from './Components/Navbar';
import Movies from './Components/Movies';
import Favourite from './Components/Favourite';
import { BrowserRouter as Router, Switch, Route, BrowserRouter} from "react-router-dom";


function App() {
  return (
    <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact render={(props)=>(
            <>
              {console.log(props)}
              <Banner {...props}/>
              <Movies {...props}/>
            </>
          )}/>
          <Route path='/favourites' component={Favourite}/>
        </Switch>
    </Router>
  );
}

export default App;
