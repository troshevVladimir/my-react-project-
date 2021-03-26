import "./style.scss"
import React from 'react'
import ReactDOM from 'react-dom'

import Center from './Graph/Center.js'
import Main from "./Graph/Main.js"

class Application extends React.Component{
	constructor(props){
		super(props)
		this.state ={
			1:{
				id: 1, 
				range : 'Center',
				header : 'center',
				content  : 'adsfd'
			},
			2:{
				id: 2, 
				range : 'Main',
				header : 'center',
				content  : 'adsfd'
			}
		}
	}
	render(){
		return (
			<div className="container">
				{this.state.entries}
				{/* <Center></Center>
				<Main/> */}
			</div>
		)
	}
}

ReactDOM.render(
	<Application/>,
	document.getElementById('root')
);