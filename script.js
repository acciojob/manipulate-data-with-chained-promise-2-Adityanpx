//your JS code here. If required.
function getInitialArray() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([1, 2, 3, 4]); // Initial array
    }, 3000); // 3-second delay
  });
}

function filterEvenNumbers(arr) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const evens = arr.filter(num => num % 2 === 0);
      document.getElementById("output").textContent = evens.join(",");
      resolve(evens);
    }, 1000); // 1-second delay
  });
}

function multiplyByTwo(arr) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const multiplied = arr.map(num => num * 2);
      document.getElementById("output").textContent = multiplied.join(",");
      resolve(multiplied);
    }, 2000); // 2-second delay
  });
}

// Start the chain
getInitialArray()
  .then(filterEvenNumbers)
  .then(multiplyByTwo);
