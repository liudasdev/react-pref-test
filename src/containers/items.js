import React from 'react'
import { connect } from 'react-redux'

import Items from '../components/items'
import { addItem } from '../actions'

function mapStateToProps(state) {
	console.log("items -> mapStateToProps", state)
	return {
		items: state.items
	}
}

function mapDispatchToProps(dispatch) {
	return {
		onItemClick: () => dispatch(addItem)
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Items)