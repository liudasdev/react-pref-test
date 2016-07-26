import React from 'react'
import { connect } from 'react-redux'

import Title from '../components/title'
import { addItem, updateTitle } from '../actions'

function mapStateToProps(state) {
	console.log('mapStateToProps > title')
	return {
		text: state.title
	}
}

function mapDispatchToProps(dispatch) {
	return {
		onAddClick: () => dispatch(addItem()),
		onUpdateClick: () => dispatch(updateTitle())
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Title)