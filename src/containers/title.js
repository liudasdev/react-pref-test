import React from 'react'
import { connect } from 'react-redux'

import Title from '../components/title'
import { addItem } from '../actions'

function mapStateToProps(state) {
	return {
		text: state.title
	}
}

function mapDispatchToProps(dispatch) {
	return {
		onClick: () => dispatch(addItem())
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Title)