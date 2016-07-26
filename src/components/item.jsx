import React, { PropTypes } from 'react'
import { incrementRenderCount } from '../data'

const Item = ({ onIncrementClick, onDecrementClick, text, count, id }) => {

	const renderCount = incrementRenderCount(id)

	// console.log('render > item >', id)

	return (
		<li>
	  		<div>{ text }</div>
	  		<div>Render: { renderCount }</div>
	  		<div>Count: { count }</div>
	  		<div>
	  			<button onClick={ onIncrementClick }>+</button>
	  			<button onClick={ onDecrementClick }>-</button>
	  		</div>
		</li>
	)
}

Item.propTypes = {
	onIncrementClick: PropTypes.func.isRequired,
	onDecrementClick: PropTypes.func.isRequired,
	text: PropTypes.string.isRequired
}

export default Item