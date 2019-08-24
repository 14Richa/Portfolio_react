import './Page1.css';
import React from 'react';
import { Link } from 'react-router-dom';

class Page2 extends React.Component {
	render() {
		
		return ( 
		<div className = "paper container canvas col border border-secondary"> 
			<h1> Page 2 </h1>

			<div class="row">
  				<div class="collapsible">
   			 		<input id="collapsible1" type="checkbox" name="collapsible"/>
    				<label for="collapsible1">First</label>
    					<div class="collapsible-body">
      						<span>Bacon ipsum dolor sit amet landjaeger sausage brisket, jerky drumstick fatback boudin ball tip turducken...</span>
    					</div>
  				</div>
  				<div class="collapsible">
    				<input id="collapsible2" type="checkbox" name="collapsible"/>
    				<label for="collapsible2">Second</label>
    					<div class="collapsible-body">
      						<span>Bacon ipsum dolor sit amet beef venison beef ribs kielbasa. Sausage pig leberkas, t-bone sirloin shoulder bresaola...</span>
    					</div>
  				</div>
  				<div class="collapsible">
    				<input id="collapsible3" type="checkbox" name="collapsible"/>
    				<label for="collapsible3">Third</label>
    					<div class="collapsible-body">
      						<span>Bacon ipsum dolor sit amet landjaeger sausage brisket, jerky drumstick fatback boudin ball tip turducken...</span>
    					</div>
  				</div>
  				<div class="collapsible">
    				<input id="collapsible4" type="checkbox" name="collapsible"/>
    				<label for="collapsible4">Fourth</label>
    					<div class="collapsible-body">
      						<span>Bacon ipsum dolor sit amet beef venison beef ribs kielbasa. Sausage pig leberkas, t-bone sirloin shoulder bresaola...</span>
    					</div>
  				</div>
			</div>
			<div className = {`button social`}>
				<button class="ui circular twitter icon button">
  					<i class="twitter icon"></i>
				</button>
				<a href = "https://www.linkedin.com/in/richa-sharma-088723134/">
				<button class="ui circular linkedin icon button">
  					<i class="linkedin icon"></i>
				</button>
				</a>
			</div>
			<div className = {`footer`}> 
				<Link to = {`/`}>
					<button className = "col background-secondary">
						<i class="reply icon"></i>
					</button>
				</Link>
			</div>
		</div>
		
				
  		);
	}
}

export default Page2;
