import "./style.scss"
import React from 'react'
import ReactDOM from 'react-dom'

import Center from './Graph/centerPoint.js'

function Application() {
	return (
		<div>
			<h1>Hello from desctop another</h1>
			<h2>Hello from laptop </h2>
			<Center color="red"></Center>
		</div>
	)
}

ReactDOM.render(
	Application(),
	document.getElementById('root')
);