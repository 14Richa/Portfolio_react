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

// 		<form
//   action="https://formspree.io/xogvjvqx"
//   method="POST"
// >
//   <label>
//     Your email:
//     <input type="text" name="_replyto"/>
//   </label>
//   <label>
//     Your message:
//     <textarea name="message"></textarea>
//   </label>
//   </form>


// <h3> 
// 					<Typewriter
//   						onInit={(typewriter) => {
//     							typewriter.pauseFor(250)
// 										  .typeString('A Front-end Developer who focuses')
// 										  .pauseFor(300)
// 										  //.deleteChars(10)
// 										  .typeString('<strong></strong> on writing clean,elegant and efficient code. ')
// 										  //.typeString('<strong>only <span style="color: #27ae60;">5kb</span> Gzipped!</strong>')
// 										  .pauseFor(1000)
// 										  .start();
//   								}}
// 					/>
// 				</h3>

// <h2>
// 					<Typewriter
// 					  onInit={(typewriter) => {
// 					    typewriter.typeString('Hello World!')
// 					      .callFunction(() => {
// 					        console.log('String typed out!');
// 					      })
// 					      .pauseFor(2500)
// 					      .deleteAll()
// 					      .callFunction(() => {
// 					        console.log('All strings were deleted');
// 					      })
// 					      .start();
// 					  }}
// 					/>
// 				</h2>


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

				<h3> A Front-end Developer who focuses on writing clean,elegant and efficient code. </h3>
					
				</div>

				

				

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





				<h4 class = "info"> I am proficient in ReactJS, Javascript and GastbyJS. I have worked in Front-end development and comfortable with different techonlogies and tools. I am always eager to learn new technologies and 
				look forward to apply them in my work. I care about performance optimization, frictionless UI and readability in code.</h4>
					<h4 class = "info"> I scroll github and codepen more than my Instagram &#128540;</h4> 

  	

				<div class = "grid-container work">
					<a className = {`work1 paper-btn` } popover-top="Newspaper front-page using only flexbox and grids" >UI/UX </a>
					<a className = {`work2 paper-btn`} popover-top="Case study on improving rendring using Chrome tools" href="https://14richa.github.io/2019-03-23/casestudy1" target = "_blank">Web Optimization</a>
					<a className = {`work3 paper-btn`} popover-top="Youtube clone with a twist." href="https://videos-react.herokuapp.com/" target = "_blank">React</a>	
				</div>
				<div class= "grid-container footer">
					<div className = {`button social`} >
					
							<a className = {`paper-btn twitter`} href = "https://twitter.com/geekGirlRicha" target = "_blank"> 
  							<i class="twitter icon" > </i> 
  							</a>
						

						
					
							
							<a className = {`paper-btn`} href = "https://www.linkedin.com/in/richa-sharma-088723134/" target = "_blank">
							<i class="linkedin icon"> </i> 
							</a>

  						
  							
  						
						

						
					
							<a className = {`paper-btn github`} href = "https://github.com/14Richa" target = "_blank">
							<i class = "github icon"></i>
							</a>

							<a  className = {`paper-btn blog`} href = "https://14richa.github.io/"target = "_blank">
							<i class="pencil alternate icon"></i>
							</a> 
						
				   

					</div>
				</div>
		

				<div class="row flex-spaces child-borders">
  					<label class="paper-btn margin contact" for="modal-2">Write to me!</label>
				</div>
				<input class="modal-state" id="modal-2" type="checkbox"/>
				<div class="modal">
  				<label class="modal-bg" for="modal-2"></label>
  				<div class="modal-body">
  				<form
  						action="https://formspree.io/xogvjvqx"
   						method="POST">
								
   				<label>
    			Your email:
   				 <input type="text" name="_replyto"/>
  				 </label>
   				<label class = "message">
    				Your message:
    			<textarea  name="message"></textarea>
  				</label>
  					<input class = "send" type="submit" value="Send"/>
   				</form>
   					 
    
  			</div>
			</div>

				


				

			</div>
		);
	}
}

export default Page1;
 





			
				
			