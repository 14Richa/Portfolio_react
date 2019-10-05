import './Page1.css';
import React from 'react';
import { Link } from 'react-router-dom';
import TypeIt from 'typeit';
import Type from './temp.js'
import Typewriter from 'typewriter-effect';


class Page1 extends React.Component {

// constructor (props) {
//     super(props);
//     this.props =  {strings:"Out of 100 men, one will read the Bible, the other 99 will read the Christian. <br> – D. L. Moody",
//       loop:true,
//       loopDelay:5000,
//       speed:40}
//   }
  
  // componentDidMount () {
  //   new TypeIt(this.el, {strings:"Out of 100 men, one will read the Bible, the other 99 will read the Christian. <br> – D. L. Moody",
  //     loop:true,
  //     loopDelay:5000,
  //     speed:40} );
  // }



	render() {
		return (
		
			<div className = "paper container canvas col border border-secondary">

				<div>

					<h1> <Typewriter
  					options={{
  						strings: ['Hey,', 'I am Richa'],
    					autoStart: true,
    					loop: true,

  					}}
					/>  

				</h1>


					<h3> I like to code and build beautiful interfaces! </h3>
				</div>

				<h3> 
					<Typewriter
  						onInit={(typewriter) => {
    							typewriter.pauseFor(250)
										  .typeString('A Front-end Developer who focuses')
										  .pauseFor(300)
										  //.deleteChars(10)
										  .typeString('<strong></strong> on writing clean,elegant and efficient code. ')
										  //.typeString('<strong>only <span style="color: #27ae60;">5kb</span> Gzipped!</strong>')
										  .pauseFor(1000)
										  .start();
  								}}
					/>
				</h3>

				{/*<div className = "row">
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
  				</div>*/}



  				<form
  action="https://formspree.io/xogvjvqx"
  method="POST"
>
  <label>
    Your email:
    <input type="text" name="_replyto"/>
  </label>
  <label>
    Your message:
    <textarea name="message"></textarea>
  </label>


  <button type="submit">Send</button>
</form>



				<div class = "grid-container">

					<a className = {`work1 paper-btn`}>HTML and CSS</a>
					<a className = {`work2 paper-btn`} href="https://14richa.github.io/2019-03-23/casestudy1" target = "_blank">Web Optimization</a>
					<a className = {`work3 paper-btn`} href="https://videos-react.herokuapp.com/" target = "_blank">React</a>	
				</div>
				<div class= "grid-container footer">
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


					
					<Link to = {`/Page2`}>
					 <button className = "col background-secondary">
					 <i class="share icon"></i>
					 </button>
					</Link>
				   

				</div>
				</div>


				

			</div>
		);
	}
}

export default Page1;
 





			
				
			