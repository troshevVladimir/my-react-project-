import React from 'react'
import ReactDOM from 'react-dom'


let size = 18;
let style = {
	width: size+"px",
	height: size+"px",
	lineHeight: size+"px",
	fontSize: size*1.2 + "px"
};

function InterfaceItem (props) {
	style.backgroundColor = props.color;
	return <div className="interface__child1" style={style}>+</div>
}

export default InterfaceItem 