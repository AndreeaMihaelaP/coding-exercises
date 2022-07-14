const nemo = ["nemo"];

function findNemo(array) {
  let t0 = Date.now();
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "nemo") {
      console.log("Found NEMO!");
    }
  }
  let t1 = Date.now();
  console.log("Call to find Nemo took " + (t1 - t0) + " milliseconds");
}

// findNemo(nemo);  // O(n)

const everyone = [
  "dory",
  "bruce",
  "marlin",
  "nemo",
  "gill",
  "bloat",
  "nigel",
  "squirt",
  "darla",
  "hank",
];

const large = new Array(100000).fill("nemo");

function findNemo2(array) {
  let t0 = Date.now();
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "nemo") {
      console.log("Found NEMO!");
      break;
    }
  }
  let t1 = Date.now();
  console.log("Call to find Nemo took " + (t1 - t0) + " milliseconds");
}

// findNemo2(large);  // O(n)

function findNemo3(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "nemo") {
      console.log("Found NEMO!");
    }
  }
}

// findNemo3(large); // O(n)

const boxes = [0, 1, 2, 3, 4, 5];
const logFirstTwoBoxes = (boxes) => {
  console.log(boxes[0]);
  console.log(boxes[1]);
};

logFirstTwoBoxes(boxes); // O(1)

// Log all pairs of array

const logPairsOfArray = (boxes) => {
  for (i = 0; i < boxes.length; i++) {
    for (j = 0; j < boxes.length; j++) {
      console.log("Pair of i and j", boxes[i], boxes[j]);
    }
  }
};

logPairsOfArray(boxes);
