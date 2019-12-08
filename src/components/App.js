/* 
* App Component get loaded initially which is the parent of all sub components
* Created at : 07-12-2019
* Author : Kavya Sagar
*/

import React from 'react';
import '../css/App.css';
import ShootButton from './ShootButton.js';

function App() {
  return (   
  	<div className="container-fluid">
      <div className="row">
		<div className="col-sm-12">
			<header className="App-header">
				<img src="../image/Star_Wars_Logo.svg" className="App-logo" alt="logo" />
			</header>
		</div>
	  </div> 
	  <ShootButton/>						 
	</div>    
  );
}

export default App;