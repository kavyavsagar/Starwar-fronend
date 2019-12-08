/* 
* Component which showing species appeared in the most number of Star Wars films
* Created at : 07-12-2019
* Author : Kavya Sagar
*/

import React from 'react';
import {PopularSpeciesService} from '../services/StarwarServices';

class PopularSpecies extends React.Component  {

	constructor(props) {
	    super(props);
	    this.state = {popularSpecies: []};
  	}
  	// Invoke api for popular species
  	componentDidMount(){
	  	PopularSpeciesService()
	      .then(res => res.json())
	      .then(data => this.setState({ popularSpecies: data.result}))
	      .catch((err) => console.log(err));
  	}

	render(){	
		return(
			<div className="row">
			<div className="col-sm-12">
				<h4>What species appeared in the most number of Star Wars films?</h4>
				<div className="answer">
				{
		        // To display map array data
		        this.state.popularSpecies.map(function(val, index){
		          return (
		          	<p key={index}>
					  {val.name} ({val.count})
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

export default PopularSpecies;