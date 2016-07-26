import React, { PropTypes } from 'react'
import { incrementRenderCount } from '../data'
import pureRenderer from '../pure-renderer'

const Item = ({ onIncrementClick, onDecrementClick, text, count, id }) => {

	// const renderCount = incrementRenderCount(id)

	function handleIncrementClick() {
		onIncrementClick(id)
	}

	function handleDecrementClick() {
		onDecrementClick(id)
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
	onIncrementClick: PropTypes.func.isRequired,
	onDecrementClick: PropTypes.func.isRequired,
	text: PropTypes.string.isRequired
}
 

class ItemComponent extends React.Component {

	render() {
		console.error('render > item', this.props.id)
		return Item(this.props)
	}
}

export default pureRenderer(ItemComponent)