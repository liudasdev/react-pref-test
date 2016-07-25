import React from 'react'
import { connect } from 'react-redux'

import Items from '../components/items'

function mapStateToProps(state) {
	return {
		items: state.items
	}
}

export default connect(
	mapStateToProps
)(Items)