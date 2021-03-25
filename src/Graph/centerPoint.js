import React from 'react';
import RactDOM from 'react-dom';

import Interface from "./interface.js"


class Center extends React.Component{
	constructor(props){
		super(props);
		this.state ={
			time : 0
		}
	}
	changeTime(){
		this.setState((state)=>({
			time : state.time +1
		}))
	}
	componentDidMount(){
		setInterval(
			()=>{this.changeTime()}
			,1000
		)
	}
	render(){
		return(
			<div className="center">
				{this.state.time}	
				<Interface color="blue">
				</Interface>
			</div>
		)
	}
}



export default Center