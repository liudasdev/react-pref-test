import React, { PropTypes } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

const Title = ({ text, addItem, updateTitle }) => {
	
	return (
		<div>
			<p>-- { text } --</p>
			<button onClick={ addItem }>Add</button>
			<button onClick={ updateTitle }>Update</button>
		</div>
	)
}

Title.propTypes = {
	text: PropTypes.string.isRequired,
	addItem: PropTypes.func.isRequired,
	updateTitle: PropTypes.func.isRequired
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