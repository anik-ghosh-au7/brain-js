const brain = require('brain.js');

const restaurants = {
    "Brilliant Yellow Corral": "Monday",
    "Penny’s": "Tuesday",
    "Right Coast Wings": "Wednesday",
    "The Delusion Last Railway Car": "Thursday",
    "Fun Day Inn": "Friday",
    "JHOP": "Saturday",
    "Owls": "Sunday"
};

// input: { Monday, Tuesday, Wednesday, etc. }
// output: { Restaurant1, Restaurant2 }

const trainingData = [];

for (let restaurantName in restaurants) {
    const dayOfWeek = restaurants[restaurantName];
    trainingData.push({
        input: { [dayOfWeek]: 1 },
        output: { [restaurantName]: 1 }
    });
}

const net = new brain.NeuralNetwork({ hiddenLayers: [3] });

const stats = net.train(trainingData);

console.log(stats);

console.log(net.run({ 'Monday': 1 }));

/* {
  'Brilliant Yellow Corral': 0.8141407370567322,
  'Penny’s': 0.00009863224113360047,
  'Right Coast Wings': 0.00031469608074985445,
  'The Delusion Last Railway Car': 0.03266478702425957,
  'Fun Day Inn': 0.00017172851948998868,
  JHOP: 0.07015511393547058,
  Owls: 0.07694496959447861
} */

function restaurantForDay(dayOfWeek) {
    const result = net.run({ [dayOfWeek]: 1 });
    let highestValue = 0;
    let highestRestaurantName = '';
    for (let restuarantName in result) {
        if (result[restuarantName] > highestValue) {
            highestValue = result[restuarantName];
            highestRestaurantName = restuarantName;
        }
    }
    
    return highestRestaurantName;
}

console.log('Free food for Monday go to --> ', restaurantForDay('Monday'));
console.log('Free food for Tuesday go to --> ', restaurantForDay('Tuesday'));
console.log('Free food for Wednesday go to --> ', restaurantForDay('Wednesday'));
console.log('Free food for Thursday go to --> ', restaurantForDay('Thursday'));
console.log('Free food for Friday go to --> ', restaurantForDay('Friday'));
console.log('Free food for Saturday go to --> ', restaurantForDay('Saturday'));
console.log('Free food for Sunday go to --> ', restaurantForDay('Sunday'));

/* Free food for Monday go to -->  Brilliant Yellow Corral
Free food for Tuesday go to -->  Penny’s
Free food for Wednesday go to -->  Right Coast Wings
Free food for Thursday go to -->  The Delusion Last Railway Car
Free food for Friday go to -->  Fun Day Inn
Free food for Saturday go to -->  JHOP
Free food for Sunday go to -->  Owls */