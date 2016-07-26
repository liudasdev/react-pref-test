import React, { PropTypes } from 'react'

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

export default Title