/* 
* Component which showing the characters which are appearing in most of the starwar films
* Created at : 07-12-2019
* Author : Kavya Sagar
*/

import React from 'react';
import {PopularCharService} from '../services/StarwarServices';

class PopularCharacter extends React.Component  {

	constructor(props) {
	    super(props);
	    this.state = {popularChars: [], totalNumber: 0};
  	}
  	// Invoke api for popular characters
  	componentDidMount(){
	  	PopularCharService()
	      .then(res => res.json())
	      .then(data => this.setState({ popularChars: data.results, totalNumber: data.total}))
	      .catch((err) => console.log(err));
  	}

	render(){	
		let total = this.state.totalNumber;
		return(
			<div className="row">
			<div className="col-sm-12">
				<h4>What character (person) appeared in most of the Star Wars films?</h4>
				<div className="answer">
				{
		        // To display map array data
		        this.state.popularChars.map(function(val, index){
		          return (
		          	<p key={index}>
					  {val.name} ({total})
					</p>
		          	)
		        })
		        }
		     	</div>
		    </div>
			</div>
		);
	}
}

export default PopularCharacter;