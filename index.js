// Code your solution in this file
function findMatching(drivers, string) {
  const newDrivers = drivers.filter(driver => driver.toLowerCase() === string.toLowerCase())
  return newDrivers;
}

function fuzzyMatch(drivers, string) {
  const newDrivers = drivers.filter(driver => driver.slice(0, string.length) === string)
  return newDrivers;
}

function matchName(drivers, string) {
  const newDrivers = drivers.filter(driver => driver['name'] === string)
  return newDrivers;
}
