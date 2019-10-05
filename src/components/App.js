import React from 'react';
import {BrowserRouter, Route } from 'react-router-dom';
import Page1 from './Page1';
import Page2 from './Page2';



const App = () => {
	return (
		<div>
	
			
			<BrowserRouter>
				<div>

				
					<Route path = "/" exact component = {Page1} />
					<Route path = "/Page2" exact component = {Page2} />
					
				</div>
					
			</BrowserRouter>
		</div>






	)
};

export default App;

//<Route path = "/Page2" exact component = {Page2} />