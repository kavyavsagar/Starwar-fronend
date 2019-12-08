/* 
* Component which loaded all sub components when a button get fired
* Created at : 07-12-2019
* Author : Kavya Sagar
*/

import React from 'react';
import LongestCrawl from './LongestCrawl.js';
import PopularCharacter from './PopularCharacter.js';

class ShootButton extends React.Component {

  constructor(props) {
    super(props);
    this.state = {displayQuestions: false};
  }
  // Button fired to load all sub components
  shoot = () => {   
    this.setState({
        displayQuestions: !this.state.displayQuestions
    })
  }

  render() {
    let questions = '';
    if ( this.state.displayQuestions ) {
         questions = (
         <div>
              <LongestCrawl/>
              <PopularCharacter/> 
         </div>
         )
    }

    return (
      <div>
        <div className="row">
          <div className="col-sm-12">
              <button onClick={this.shoot} className="btn btn-warning"><i className="fa fa-star" aria-hidden="true"></i>Do. Or don't. There is no try.<i className="fa fa-star" aria-hidden="true"></i></button>;
          </div>
        </div>
        {questions}
      </div>
    )
  }
}

export default ShootButton;