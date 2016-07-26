import React, { PropTypes } from 'react'
import Item from './../containers/item'

let renderCount = 0

const Items = ({ ids }) => {

	renderCount++

	return (
		<div>
			<div>List > Render: { renderCount }</div>
			Items:
	 		<ul>
			{ 
				ids.map(id => (
					<Item key={ id } id={ id } />
				))
			}
	  		</ul>
	  	</div>
	)
}

Items.propTypes = {
  ids: PropTypes.arrayOf(PropTypes.shape({
	id: PropTypes.string.isRequired
  }).isRequired).isRequired
}

export default Items