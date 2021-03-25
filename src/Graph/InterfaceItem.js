import React from 'react'


let size = 18;


function InterfaceItem (props) {
	let style = {
		width: size+"px",
		height: size+"px",
		lineHeight: size+"px",
		fontSize: size*1.2 + "px",
		backgroundColor : props.color
	};
	return <div className="interface__child1" style={style}>+</div>
}

export default InterfaceItem 