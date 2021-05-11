import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ReactDOM from 'react-dom';
import Counter from './components/counter';

const element = <h1>History!</h1>;
console.log(element);
ReactDOM.render(<Counter />, document.getElementById('root'));