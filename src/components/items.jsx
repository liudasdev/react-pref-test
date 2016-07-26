import React, { PropTypes } from 'react'
import Item from './../containers/item'
import pureRenderer from '../pure-renderer'

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

class ItemsComponent extends React.Component {
	render() {
		return Items(this.props)
	}
}

export default pureRenderer(ItemsComponent)