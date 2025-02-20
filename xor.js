const brain = require('brain.js');

const net = new brain.NeuralNetwork({ hiddenlayers: [3] });

const trainingData = [
    { input: [0, 0], output: [0] },
    { input: [0, 1], output: [1] },
    { input: [1, 0], output: [1] },
    { input: [1, 1], output: [0] }
];

net.train(trainingData, {
    log: err => console.log(err), // logs the error in the console
    logPeriod: 50 // for ervery 50 iterations
});

console.log(net.run([0, 1])); // [ 0.9335762858390808 ]
// console.log(net.run([0, 0])); // [ 0.05643659085035324 ]