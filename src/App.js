import React from 'react'; 
import {
  Router,
  Switch,
  Route,
} from "react-router-dom";
import  history from './helpers/history';
import { useSelector } from "react-redux";

//components
import Header from './components/Global/header';
import Footer from './components/Global/footer';
import Menu from './components/Global/Menu';

//containers
import SearchResults from './containers/searchResults';
import Home from './containers/home';
import NotFoundPage from './containers/notFoundPage'


function App() {
  const openDrawer = useSelector(state => state.homepageReducer.openDrawerflag);

  return (
    <Router history={history}>
       <div style={{ display: 'flex',backgroundColor:'gray' ,flexDirection: 'column', fontSize: '2rem',overflow:'hidden',WebkitOverflowScrolling:'touch'}}>
        <Header open={openDrawer}/>
        <Menu open={openDrawer}/>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/SearchResults" component={SearchResults} />
            <Route component={NotFoundPage} />
          </Switch>
            <Footer />
        </div>
    </Router>

  );
}

export default App;
