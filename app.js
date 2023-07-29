import React from 'react';
import ReactDOM from 'react-dom';

let demo = React.createElement(
	"h1", { style: { color: "green" } }, "Hello World"
)
const main = ReactDOM.createRoot(
	document.getElementById('root')
);

main.render(demo)
