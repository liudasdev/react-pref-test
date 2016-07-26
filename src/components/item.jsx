import React, { PropTypes } from 'react'
import { incrementRenderCount } from '../data'
import pureRenderer from '../pure-renderer'

const Item = ({ item, increment, decrement, id }) => {

	// const renderCount = incrementRenderCount(id)
	const { text, count } = item

	function handleIncrementClick() {
		increment(id)
	}

	function handleDecrementClick() {
		decrement(id)
	}

	return (
		<li>
	  		<div>{ text }</div>
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

class ItemComponent extends React.Component {
	render() {
		return Item(this.props)
	}
}

export default pureRenderer(ItemComponent)