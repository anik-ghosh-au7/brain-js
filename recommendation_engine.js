const brain = require('brain.js');

const trainingData = [
    { input: { blue: 1 }, output: [1] },
    { input: { red: 1 }, output: [1] },
    { input: { black: 1 }, output: [0] },
    { input: { green: 1 }, output: [0] },
    { input: { brown: 1 }, output: [0] },
];

const net = new brain.NeuralNetwork();

net.train(trainingData);
console.log('before preference change');
console.log(Array.from(net.run({ blue: 1 })));
console.log(Array.from(net.run({ brown: 1 })));

/* before preference change
[ 0.919318437576294 ]
[ 0.063776396214962 ] */

trainingData.pop();
trainingData.push(
    { input: { brown: 1 }, output: [1] }
);

net.train(trainingData);
console.log('after preference change');
console.log(Array.from(net.run({ blue: 1 })));
console.log(Array.from(net.run({ brown: 1 })));

/* after preference change
[ 0.9800891876220703 ]
[ 0.8987285494804382 ] */