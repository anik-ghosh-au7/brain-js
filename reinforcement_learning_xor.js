const brain = require('brain.js');

const trainingData = [
    { input: [0, 0], output: [0] },
    { input: [0, 1], output: [1] },
    // { input: [1, 0], output: [1] },
    // { input: [1, 1], output: [0] }
];

const net = new brain.NeuralNetwork({ hiddenLayers: [3] });

net.train(trainingData);

console.log('before reinforcement');
console.log(Array.from(net.run([0, 0])));
console.log(Array.from(net.run([1, 0])));

/* before reinforcement
[ 0.07096238434314728 ]
[ 0.06056593358516693 ] */

trainingData.push(
    { input: [1, 0], output: [1] }
);

net.train(trainingData);

console.log('after reinforcement');
console.log(Array.from(net.run([0, 0])));
console.log(Array.from(net.run([1, 0])));

/* after reinforcement
[ 0.0894899070262909 ]
[ 0.9219147562980652 ] */