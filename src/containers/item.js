import React from 'react'
import { connect } from 'react-redux'

import Item from '../components/item'
import { increment, decrement } from '../actions'

function mapStateToProps(state, props) {

	const { id } = props;
	const { items } = state;

	return {
		item: items[id],
	}
}

export default connect(
	mapStateToProps,
	{
		increment,
		decrement
	}
)(Item)