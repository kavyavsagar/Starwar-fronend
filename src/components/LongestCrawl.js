/* 
* Component which showing the longest opening crawl of characters from starwar films
* Created at : 07-12-2019
* Author : Kavya Sagar
*/

import React from 'react';
import {LongestCharService} from '../services/StarwarServices';

class LongestCrawl extends React.Component  {

	constructor(props) {
	    super(props);
	    this.state = {characters: []};
  	}
  	// Invoke api for highest number of characters
  	componentDidMount(){
	  	LongestCharService()
	  	  .then(res => res.json())
	      .then(data => this.setState({ characters: data.results}))
	      .catch((err) => console.log(err));
  	}

	render(){	
		return(
			<div className="row">
			<div className="col-sm-12">
				<h4>Which of all Star Wars movies has the longest opening crawl?</h4>
				<div className="answer">
				{
		        // To display map array data
		        this.state.characters.map(function(val, index){
		          return (
		          	<p key={index}>
					  {val.title} ({val.numberOfChars})
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

export default LongestCrawl;