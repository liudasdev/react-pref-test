import React from 'react'
import { connect } from 'react-redux'

import Items from '../components/items'

function mapStateToProps(state) {

	return {
		ids: state.ids
	}
}

export default connect(
	mapStateToProps
)(Items)