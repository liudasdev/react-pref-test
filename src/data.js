let data = {}

export function incrementRenderCount(id) {

	console.log('incrementRenderCount', data)

	if (data[id]) {
		data[id]++
	} else {
		data[id] = 1
	}

	console.log('after', data)

	return data[id]
}