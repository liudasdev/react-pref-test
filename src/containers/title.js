import React from 'react'
import { connect } from 'react-redux'

import Title from '../components/title'
import { addItem, updateTitle } from '../actions'

function mapStateToProps(state) {

	return {
		text: state.title
	}
}

export default connect(
	mapStateToProps,
	{ 
		addItem, 
		updateTitle
	}
)(Title)