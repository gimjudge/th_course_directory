import React from 'react';
import {
  BrowserRouter,
	Route,
	Switch
} from 'react-router-dom';

// App Components
import Header from './Header';
import Home from './Home';
import About from './About';
import Courses from './Courses';
import Teachers from './Teachers';
import Featured from './Featured';
import NotFound from './NotFound';

const App = () => (
  <BrowserRouter>
	<div className="container">
		<Header></Header>
		<Switch>
			<Route exact path="/" component={Home} />
			<Route path="/about" render={ () => <About title='About' /> } />
			<Route path="/courses" component={Courses} />
			<Route exact path="/teachers" component={Teachers} />
			<Route path="/teachers/:topic/:name" component={Featured} />
			<Route component={NotFound} />
		</Switch>
	</div>
  </BrowserRouter>
);

export default App;