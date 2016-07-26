import React, { PropTypes } from 'react'

const Title = ({ text, onAddClick, onUpdateClick }) => (
	<div>
		<p>-- { text } --</p>
		<button onClick={ onAddClick }>Add</button>
		<button onClick={ onUpdateClick }>Update</button>
	</div>
)

Title.propTypes = {
	text: PropTypes.string.isRequired,
	onAddClick: PropTypes.func.isRequired,
	onUpdateClick: PropTypes.func.isRequired
}

export default Title