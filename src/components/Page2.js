import './Page1.css';
import './Page2.css';
import React from 'react';
import { Link } from 'react-router-dom';

class Page2 extends React.Component {
	render() {
		
		return ( 
		<div className = "paper container canvas col border border-secondary"> 
			<h1> Page 2 </h1>
      
      <div class="form-group">
          <label for="paperInputs1">Name</label>
              <input type="text" id="paperInputs1"/>
      </div>
      <div class="row">
        <div class="col sm-4">
          <div class="form-group">
            <label for="paperInputs2">Email</label>
              <input class="input-block" type="text" id="paperInputs2"/>
          </div>
        </div>
        <div class="col sm-8">
          <div class="form-group">
            <label for="paperInputs3">Message</label>
              <textarea placeholder="write your message here"></textarea>
           </div>
         </div>
        </div>
        
        
        <div> <button> Send Message </button> </div>

        <Link to = {`/`}>
           <button className = "col background-secondary">
           <i class="reply icon"></i>
           </button>
          </Link>
        </div>
    
				
  		);
	}
}

export default Page2;
