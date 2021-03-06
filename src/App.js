import React from 'react';
import ReactGA from 'react-ga';
import {
	BrowserRouter as Router,
	Route,
} from 'react-router-dom';

//components
import Header from './components/headerComponents/header';
import Footer from './components/footerComponents/footer';
import Homepage from './components/pages/homepage';

//includes
import './Assets/css/header.min.css';
import './Assets/css/homepage.min.css';
import './Assets/css/footer.min.css';
import './Assets/css/responsive.min.css';

ReactGA.initialize('UA-147444675-1');
ReactGA.pageview('/');

function App() {
  return (
  	<Router>
	    <div className="App">
	       <Header path='/header' component={Header}/>

	       	    <Route exact path='/' component={Homepage} /> 
	       		<Route exact path='/homepage' component={Homepage} /> 

	       	<Footer />
	    </div>
	</Router>
  );
}

export default App;
