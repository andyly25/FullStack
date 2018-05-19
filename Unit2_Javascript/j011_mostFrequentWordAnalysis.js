// Assignment:  type up notes explaining how this algorithm works.

function getTokens (rawString) {
  // NB: `.filter(Boolean)` removes any falsy items from an array
  /*
   * Goal of this function is to split up string of text and lowercase words
   * so that words won't be considered as two different things.
   * We split words from their symbols and space, then remove them keeping
   * only the words with filter. A sorted array is returned
   */
  return rawString.toLowerCase().split(/[ ,!.";:-]+/).filter(Boolean).sort();
}

// Goal of this function is to get most frequent word
function mostFrequentWord (text) {
  // we store our array of words from text into a variable
  let words = getTokens(text);
  // This is where we store our count for each word
  let wordFrequencies = {};
  // loop through words one by one
  for (let i = 0; i <= words.length; i++) {
    // if we encounter the same word again, we increment by 1
    if (words[i] in wordFrequencies) {
      wordFrequencies[words[i]]++;
    // otherwise we initialize the word's count to 1
    } else {
      wordFrequencies[words[i]] = 1;
    }
  }
  // initialize variables for most frequent word key and its count
  let currentMaxKey = Object.keys(wordFrequencies)[0];
  let currentMaxCount = wordFrequencies[currentMaxKey];

  // we loop through the keys within the wordfrequencies object
  for (let word in wordFrequencies) {
    // if the value greater than current count
    if (wordFrequencies[word] > currentMaxCount) {
      // we now have a new max key and count
      currentMaxKey = word;
      currentMaxCount = wordFrequencies[word];
    }
  }
  // return the most frequent word
  return currentMaxKey;
}
