import React, { memo } from 'react';
import createEngine, {
	DefaultLinkModel,
	DefaultNodeModel,
	DiagramModel,
} from '@projectstorm/react-diagrams';
import { CanvasWidget } from '@projectstorm/react-canvas-core';

function App() {
	const engine = createEngine();
	const node1 = new DefaultNodeModel({
		name: 'Node 1',
		color: 'green',
	});
	node1.setPosition(10, 10);
	let port1 = node1.addOutPort('In');
	const node2 = new DefaultNodeModel({
		name: 'Node 2',
		color: 'red',
	});
	node2.setPosition(1462, 692);
	let port2 = node2.addOutPort('Out');
	const node3 = new DefaultNodeModel({
		name: 'Node 3',
		color: 'blue',
	});
	node3.setPosition(10, 692);
	// let port3 = node3.addOutPort('In');
	const node4 = new DefaultNodeModel({
		name: 'Node 4',
		color: 'purple',
	});
	node4.setPosition(1462, 10);
	// let port4 = node4.addOutPort('Out');
	const link1 = port1.link<DefaultLinkModel>(port2);
	// const link2 = port3.link<DefaultLinkModel>(port4);
	link1.addLabel('Link');
	const model = new DiagramModel();
	model.addAll(node1, node2, link1, node3, node4);
	engine.setModel(model);
	return (
		<>
			<CanvasWidget engine={engine} />
		</>
	);
}

export default memo(App);
