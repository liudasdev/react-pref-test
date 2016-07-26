import React from 'react'
import Perf from 'react-addons-perf'

export default class Performance extends React.Component{
	
	onStart() {
		Perf.start();
		console.log('PERF started....');
	}

	onStop() {

		Perf.stop();

		console.log('PERF finished!');

		const lastMeasurements = Perf.getLastMeasurements();

		console.log('Operations:');
		Perf.printOperations(lastMeasurements);

		console.log('Inclusive:');
		Perf.printInclusive(lastMeasurements);

		console.log('Exclusive:');
		Perf.printExclusive(lastMeasurements);

		console.log('Wasted:');
		Perf.printWasted(lastMeasurements);

		console.log('--- END ---');
	}

	render() {
		return (
			<div>
				<p>Performance</p>
				<button onClick={ this.onStart }>Start</button>
				<button onClick={ this.onStop }>Stop</button>
			</div>
		)
	}
}