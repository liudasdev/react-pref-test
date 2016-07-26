import React from 'react'
import { connect, bindActionCreators } from 'react-redux'

import Items from '../components/items'
import { increment, decrement } from '../actions'

function mapStateToProps(state) {
	return {
		items: state.items
	}
}

function mapDispatchToProps(dispatch) {
	return {
		onIncrementClick: (id) => dispatch(increment(id)),
		onDecrementClick: (id) => dispatch(decrement(id))
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Items)