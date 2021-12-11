const input = require('./input')

const reducer = (acc, curr, index, values) => {
  
  if (index === 0) return 0;
  const prev = values[index - 1]

  if(curr > prev) return ++acc;

  return acc;
}

const promise1 = new Promise((resolve, _) => {
  resolve(input.reduce(reducer, 0))
})

promise1.then(value => console.log(value))

const input2 = input.map((_, index, values) => sumThreeMeasurement(values, index));

function sumThreeMeasurement(arr, index){
  const value1 = arr[index] || 0
  const value2 = arr[index + 1] || 0
  const value3 = arr[index + 2] || 0

  return value1 + value2 + value3
}

const promise2 = new Promise((resolve, _) => {
  resolve(input2.reduce(reducer, 0))
})

promise2.then(value => console.log(value))

module.exports = {
  reducer,
  sumThreeMeasurement
}