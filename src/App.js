

import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Banner from './components/Banner/Banner';
import Blog from './components/Blog/Blog';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import ManuBar from './components/manuBar/ManuBar';
import NotFound from './components/NotFound/NotFound';
import Servises from './components/servise/Servises';

function App() {
  return (
    <Router>
      
      <Switch>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route exact path='/home'>
          <Home></Home>
        </Route>
        <Route exact path='/about'>
          <About></About>
        </Route>
        <Route exact path='/blog'>
          <Blog></Blog>
        </Route>
        <Route exact path ="/services">
          <Servises></Servises>
        </Route>
        <Route exact path='*'>
          <NotFound></NotFound>
        </Route>

      </Switch>
      
    </Router>
  );
}

export default App;
