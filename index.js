// Code your solution here
function findMatching(arr, driver) {
  return arr.filter(d => d.toLowerCase() == driver.toLowerCase())
}

function fuzzyMatch() {
  return arr.filter(d => d == driver.slice(d.length))
}
