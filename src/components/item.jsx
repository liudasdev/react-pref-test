import React, { PropTypes } from 'react'

const Item = ({ onClick, completed, text }) => (
  <li onClick={ onClick }>{ text }</li>
)

Item.propTypes = {
	onClick: PropTypes.func.isRequired,
	text: PropTypes.string.isRequired
}

export default Item