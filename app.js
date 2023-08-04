import React from 'react';
import ReactDOM from 'react-dom';

// let demo = React.createElement(
// 	"h1", { style: { color: "green" } }, "Hello World"
// )

const Cricket = () =>{
    return <div>Rohit</div>

}
const cricket2 = 
         <React.Fragment>      
              <div>Hello sachin</div>
			  <h1>Hello Dhoni</h1> 
			  </React.Fragment>
const Cricket1 = 
<div>
	{cricket2}
	{Cricket()}
	<Cricket></Cricket>
	<Cricket/>
	<h1>Kohli</h1>
</div>

const main = ReactDOM.createRoot(document.getElementById('root')
);

main.render(Cricket1);