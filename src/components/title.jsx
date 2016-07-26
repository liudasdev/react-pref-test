import React, { PropTypes } from 'react'

const Title = ({ text, onClick }) => (
	<div>
		<p>-- { text } --</p>
		<button onClick={ onClick }>Add</button>
	</div>
)

Title.propTypes = {
	text: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired
}

export default Title