const brain = require('brain.js');

const trainingData = [
    { input: 'I am super happy!', output: 'happy' },
    { input: 'What a pill!', output: 'sarcastic' },
    { input: 'I am super unhappy!', output: 'sad' },
    { input: 'Are we there yet?', output: 'excited' }
];

const net = new brain.recurrent.LSTM();
net.train(trainingData, {
    iterations: 300,
    erroThresh: 0.005
});

// console.log(net.run('I am unhappy!')); // sad
// console.log(net.run('I am happy!')); // happy