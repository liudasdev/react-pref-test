import React, { PropTypes } from 'react'
import Item from './../containers/item'
import PureRenderMixin from 'react-addons-pure-render-mixin'

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

export default class extends React.Component {

	constructor(props) {

		super(props)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
	}

	render() {
		return Items(this.props)
	}
}