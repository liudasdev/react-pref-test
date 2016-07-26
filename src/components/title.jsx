import React, { PropTypes } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

const Title = ({ text, onAddClick, onUpdateClick }) => {
	
	console.log('render > title')

	return (
		<div>
			<p>-- { text } --</p>
			<button onClick={ onAddClick }>Add</button>
			<button onClick={ onUpdateClick }>Update</button>
		</div>
	)
}

Title.propTypes = {
	text: PropTypes.string.isRequired,
	onAddClick: PropTypes.func.isRequired,
	onUpdateClick: PropTypes.func.isRequired
}

export default class extends React.Component {

	constructor(props) {

		super(props)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
	}

	render() {
		return Title(this.props)
	}
}