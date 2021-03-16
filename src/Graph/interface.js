import React from 'react';
import RactDOM from 'react-dom';
import InterfaceItem from './InterfaceItem'
// const pos = [["-20%","50%","translate(-50% , 0)"],["50%","-120%","translate(0 , -50%)"],["-120%","50%","translate(-50% , 0)"],["50%","-20%","translate(0 , -50%)"]]


function Interface(props) {
	
	return (
		<div className="interface">
			<InterfaceItem color={props.color}></InterfaceItem>
			{/* <InterfaseItem color={props.color}></InterfaseItem>
			<InterfaseItem color={props.color}></InterfaseItem> */}
		</div>
	)
}

export default Interface 