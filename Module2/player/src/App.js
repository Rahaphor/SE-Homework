import './App.css';
import Home from './Home'
import Contact from './Contact'
import About from './About'
import Nav from './Nav'
import NbaPlayer from './NbaPlayer'
import Image from './Image'
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'

function App() {
  return (
    
    <Router>
    <div className = 'App'>
       <Nav/>
      <Switch>
        <Route path= '/' exact component={Home} />
        <Route path= '/Home'  component={Home} />
        <Route path= '/Contact'  component={Contact} />
        <Route path= '/About' component={About} />
        <Route path ='/NbaPlayer' component={NbaPlayer}/>
        <Route path ='/Image' component={Image}/>


      </Switch>
    </div>
    </Router>
  );
}

export default App;