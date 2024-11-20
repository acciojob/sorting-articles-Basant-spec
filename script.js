const bands = [
  'The Plot in You',
  'The Devil Wears Prada',
  'Pierce the Veil',
  'Norma Jean',
  'The Bled',
  'Say Anything',
  'The Midway State',
  'We Came as Romans',
  'Counterparts',
  'Oh, Sleeper',
  'A Skylit Drive',
  'Anywhere But Here',
  'An Old Dog'
];

// Function to strip articles for sorting purposes
function stripArticle(bandName) {
  const articles = ["A ", "An ", "The "]; // List of articles to remove
  for (var i = 0; i < articles.length; i++) { // Loop through the articles
    if (bandName.startsWith(articles[i])) { // Check if the name starts with the article
      return bandName.slice(articles[i].length); // Remove the article
    }
  }
  return bandName; // Return the original name if no article is found
}

// Function to compare the bands for sorting
function compareBands(a, b) {
  const strippedA = stripArticle(a); // Remove the article from band a
  const strippedB = stripArticle(b); // Remove the article from band b
  return strippedA.localeCompare(strippedB); // Compare the stripped names
}

// Sort the bands using the compareBands function
var sortedBands = bands.slice().sort(compareBands); // Sort the array

// Add sorted bands to the UL
var bandList = document.getElementById('bands'); // Get the UL element by ID
sortedBands.forEach(function(bands) { // Use a regular function instead of an arrow function
  var li = document.createElement('li'); // Create a new <li> element
  li.textContent = bands; // Set the band name as the content of the <li>
  bandList.appendChild(li); // Append the <li> to the UL
});
