let data = {}

export function incrementRenderCount(id) {

	if (data[id]) {
		data[id]++
	} else {
		data[id] = 1
	}

	return data[id]
}