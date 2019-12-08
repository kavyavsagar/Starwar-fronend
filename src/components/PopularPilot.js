/* 
* Component which showing planet in Star Wars universe provided largest number of vehicle pilots
* Created at : 07-12-2019
* Author : Kavya Sagar
*/

import React from 'react';
import {PopularPilotService} from '../services/StarwarServices';

class PopularPilot extends React.Component  {

	constructor(props) {
	    super(props);
	    this.state = {popularPilots: []};
  	}
  	// Invoke api for popular pilots from each planet
  	componentDidMount(){
	  	PopularPilotService()
	      .then(res => res.json())
	      .then(data => this.setState({ popularPilots: data.result}))
	      .catch((err) => console.log(err));
  	}

	render(){	
		return(
			<div className="row">
			<div className="col-sm-12">
				<h4>What planet in Star Wars universe provided largest number of vehicle pilots?</h4>
				<div className="answer">
				{
		        // To display map array data
		        this.state.popularPilots.map(function(val, index){
		          return (
		          	<p key={index}>
					  Planet: {val.planet} - Pilots: ({val.pilot_count}) {val.pilots.map((item, indx) => {return item.name +" - "+ item.species +", " })} 
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

export default PopularPilot;