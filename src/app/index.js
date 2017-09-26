import React from 'react';
import ReactDOM from 'react-dom';
import MagoonNav from '../components/Nav.jsx';
import Home from '../components/Home.jsx';
import ScrollingBar from '../components/ScrollingBar.jsx';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(<MagoonNav />, document.getElementById('nav'));
ReactDOM.render(<Home />, document.getElementById('main'));
ReactDOM.render(<ScrollingBar />, document.getElementById('scrolling-bar'));