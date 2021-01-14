// Code your solution here
function findMatching(arr, driver) {
  return arr.filter(d => d.toLowerCase() == driver.toLowerCase())
}

function fuzzyMatch(arr, letters) {
  return arr.map(d => d.slice(letters.length))
}
