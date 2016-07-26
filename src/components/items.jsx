import React, { PropTypes } from 'react'
import pureRenderer from '../pure-renderer'
import Item from './item'

let renderCount = 0

const Items = ({ items, onIncrementClick, onDecrementClick }) => {

	console.log('render > list')
	renderCount++

	return (
		<div>
			<div>List > Render: { renderCount }</div>
			Items:
	 		<ul>
			{ 
				items.map((item) => (
					<Item
						key={ item.id }
						{ ...item }
						onIncrementClick={ onIncrementClick }
						onDecrementClick={ onDecrementClick }
			  			/>
		  		))
			}
	  		</ul>
	  	</div>
	)
}

Items.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
	id: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	count: PropTypes.number.isRequired,
	onIncrementClick: PropTypes.func.isRequired,
	onDecrementClick: PropTypes.func.isRequired
  }).isRequired).isRequired,
  onIncrementClick: PropTypes.func.isRequired,
  onDecrementClick: PropTypes.func.isRequired
}

class ItemsComponent extends React.Component {

	render() {
		return Items(this.props)
	}
}

export default pureRenderer(ItemsComponent)