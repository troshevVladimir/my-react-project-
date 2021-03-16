import "./style.scss"
import React from 'react'
import ReactDOM from 'react-dom'

import Center from './Graph/centerPoint.js'

function Application() {
	return (
		<div>
			<h1>Hello from desctop</h1>
			<Center color="red"></Center>
		</div>
	)
}

ReactDOM.render(
	Application(),
	document.getElementById('root')
);