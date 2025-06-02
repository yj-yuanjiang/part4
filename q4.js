// Q4.4 Implement at least one search algorithm (either sequential search or binary search) according to the requirements in the task description. 
//Final 4.4 version with minor update

// Binary search to find movie by ID
function binarySearchMovieById(moviesArray, targetId) {
  let left = 0;
  let right = moviesArray.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const currentId = moviesArray[mid].id;

    if (currentId === targetId) {
      return moviesArray[mid]; // Found the movie
    } else if (currentId < targetId) {
      left = mid + 1; // Search right half
    } else {
      right = mid - 1; // Search left half
    }
  }

  return null; // Not found
}

// Example Test-existing movie ID
console.log("Binary Search Test:");
let targetId1 = 109; // Replace with a real ID in your array
let result1 = binarySearchMovieById(movies, targetId1);
if (result1) {
  console.log(`Found Movie with ID ${targetId1}:`, result1);
} else {
  console.log(`Movie with ID ${targetId1} not found.`);
}

// Test a non-existing movie ID
let targetId2 = 723;
let result2 = binarySearchMovieById(movies, targetId2);
if (result2) {
  console.log(`Found Movie with ID ${targetId2}:`, result2);
} else {
  console.log(`Movie with ID ${targetId2} not found.`);
}