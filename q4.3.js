// Q4.3 Sort the array in “ascending” order by Movie ID.
// Remember: Movie ID must be unique for each movie and not sorted in the array.

movies.sort((a, b) => a.id - b.id);

// Print the sorted array
console.log("Sorted Movie Array by ID:");
console.log(movies);