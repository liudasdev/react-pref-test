import React, { PropTypes } from 'react'

const Title = (props) => (
	<p>-- { props.text } --</p>
)

Title.propTypes = {
	text: PropTypes.string.isRequired
}

export default Title