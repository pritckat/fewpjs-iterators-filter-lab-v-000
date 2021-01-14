// Code your solution here
function findMatching(arr, driver) {
  return arr.filter(d => d.toLowerCase() == driver.toLowerCase())
}

function fuzzyMatch(arr, letters) {
  return arr.filter(d => d == letters.slice(-d.length))
}
