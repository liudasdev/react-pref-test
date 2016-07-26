import React, { PropTypes } from 'react'
import pureRenderer from '../pure-renderer'

const Title = ({ text, onAddClick, onUpdateClick }) => {
	
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

class TitleComponent extends React.Component {

	render() {
		return Title(this.props)
	}
}

export default pureRenderer(TitleComponent)