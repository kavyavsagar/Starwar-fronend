/* 
* App Test Component will execute during test run
* Created at : 07-12-2019
* Author : Kavya Sagar
*/
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
