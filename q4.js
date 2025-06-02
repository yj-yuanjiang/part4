// Q4.1 - Define a Movie class

// Define a class called Movie
class Movie {
  // The constructor defines properties for each Movie object
  constructor(id, title, year, rating) {
    this.id = id;         // Movie ID (must be unique)
    this.title = title;   // Movie title
    this.year = year;     // Release year
    this.rating = rating; // Movie rating
  }
}

// Create an instance of the Movie class
const exampleMovie = new Movie(101, "Inception", 2010, 8.8);

// Print the Movie object to the console for verification
console.log("Example Movie instance:", exampleMovie);


// Q4.2 Create an array of at least 10 movies with mock values and print the array in console.
// Remember: Movie ID must be unique for each movie and not sorted in the array.

// Create an array of 10 movies with mock values (unsorted Movie IDs)
const movies = [
  new Movie(204, "Echoes of Tomorrow", 2022, 7.8),
  new Movie(109, "Midnight Code", 2019, 6.9),
  new Movie(317, "Whispers in the Dark", 2021, 7.2),
  new Movie(143, "Digital Eden", 2020, 8.1),
  new Movie(276, "The Forgotten Protocol", 2023, 6.7),
  new Movie(190, "Chrono Trap", 2018, 7.0),
  new Movie(221, "Neon Horizon", 2017, 7.4),
  new Movie(162, "Binary Lies", 2019, 6.8),
  new Movie(388, "Shadow Firewall", 2020, 7.5),
  new Movie(135, "Signal Lost", 2016, 7.3),
];

// Print the movie array to console
console.log("Movie Array:");
console.log(movies);

// Q4.3 Sort the array in “ascending” order by Movie ID.
// Remember: Movie ID must be unique for each movie and not sorted in the array.

movies.sort((a, b) => a.id - b.id);

// Print the sorted array
console.log("Sorted Movie Array by ID:");
console.log(movies);


// Q4.4 Implement at least one search algorithm (either sequential search or binary search) according to the requirements in the task description.
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

//  Example Test-existing movie ID
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