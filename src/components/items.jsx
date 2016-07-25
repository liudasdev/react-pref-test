import React, { PropTypes } from 'react'
import Item from './item'

const Items = ({ items, onItemClick }) => {
	return (
 		<ul>
		{ 
			items.map((item) => (
				<Item
					key={ item.id }
					{ ...item }
					onClick={() => onTodoClick(item.id)}
		  			/>
	  		))
		}
  		</ul>
	)
}

Items.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
	id: PropTypes.number.isRequired,
	text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onItemlick: PropTypes.func.isRequired
}

export default Items