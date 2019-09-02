import './Page1.css';
import React from 'react';
import { Link } from 'react-router-dom';

//import Page2 from './Page2';


class Page1 extends React.Component {
	render() {
		return (
		
			<div className = "paper container canvas col border border-secondary">
				<div> 
					<h1> Hey , I am Richa  </h1>
					<h2> Welcome to my Website </h2>
					<h3> I like to code and build stuff beautifully!! </h3>
				</div>

				<div className = "row">
				HTML AND CSS
					<div class="progress margin-bottom">

    					<div class="bar danger w-91">91%</div>
  					</div>
  				JAVASCRIPT 
  					<div class = "progress margin-bottom">
  						<div class = "bar warning w-85">85%</div>
  					</div>
  					REACT
  					<div class="progress margin-bottom">
    					<div class="bar success w-78">78%</div>
  					</div>
  					PYTHON
  					<div class="progress margin-bottom">
    					<div class="bar w-55">55%</div>
  					</div>
  				</div>
				<div>
					<div class="row flex-spaces child-borders">
  						<label class="paper-btn margin" for="modal-1">Web Optimization</label>
					</div>
						<input class="modal-state" id="modal-1" type="checkbox"/>
					<div class="modal">
  						<label class="modal-bg" for="modal-1"></label>
 					 <div class="modal-body">
   					 <label class="btn-close" for="modal-1">X</label>
   					 
    				<h4 class="modal-title">Web Optimization</h4>
   					 <h5 class="modal-subtitle">Project</h5>
   					 <p class="modal-text">Case study on Web perfomance of a website.</p>
   					 <label for="modal-1">
   					 <a href = "https://14richa.github.io/2019-03-23/casestudy1" target = "_blank"> Show Project </a></label>
  					</div>

				</div>

				<div class = "grid-container">

					<a  className = {`work1 paper-btn`}>HTML and CSS</a>
					<a className = {`work2 paper-btn`} href="https://14richa.github.io/2019-03-23/casestudy1" target = "_blank">Web Optimization</a>
					<a className = {`work3 paper-btn`} href="https://videos-react.herokuapp.com/" target = "_blank">React</a>
				</div>	
				</div>
				<div> 
					<h4 className = "blog">I also write sometimes:  <a href = "https://14richa.github.io/" target = "_blank"><img src = "ink-pot.jpg" alt = "ink"/></a></h4> 
				</div>
				<div className = {`button social`}>
					<button>
  						<i class="twitter icon"></i>
					</button>
						
					<button>
					
						<a className = {`linkedin icon`} href = "https://www.linkedin.com/in/richa-sharma-088723134/">

  						
  						</a>
  						
					</button>
						
					<button>
						<i class = "github icon"></i>
					</button>

				</div>


				<div className = {`footer`}> 
					<Link to = {`/Page2`}>
					 <button className = "col background-secondary">
					 <i class="share icon"></i>
					 </button>
					</Link>
				</div>
			</div>
		);
	}
}

export default Page1;
 





			
				
			