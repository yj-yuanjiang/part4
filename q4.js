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