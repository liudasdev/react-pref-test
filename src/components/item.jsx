import React, { PropTypes } from 'react'
import { incrementRenderCount } from '../data'

const Item = ({ item, increment, decrement, id }) => {

	const renderCount = incrementRenderCount(id)
	const { text, count } = item
	console.log('render > item >', id, item)

	function handleIncrementClick() {
		increment(id)
	}

	function handleDecrementClick() {
		decrement(id)
	}

	return (
		<li>
	  		<div>{ text }</div>
	  		<div>Render: { renderCount }</div>
	  		<div>Count: { count }</div>
	  		<div>
	  			<button onClick={ handleIncrementClick }>+</button>
	  			<button onClick={ handleDecrementClick }>-</button>
	  		</div>
		</li>
	)
}

Item.propTypes = {
	increment: PropTypes.func.isRequired,
	decrement: PropTypes.func.isRequired,
	id: PropTypes.string.isRequired,
	item: PropTypes.shape({
		count: PropTypes.number.isRequired,
		text: PropTypes.string.isRequired
  	}).isRequired
}

export default Item