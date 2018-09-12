/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var count = 0;

  for (var i = 0; i < preferences.length; i++) {
  	var firstElement  = preferences[i] - 1;
  	var secondElement = preferences[firstElement] - 1;
  	var thirdElement  = preferences[secondElement] - 1;

  	if (firstElement === i) continue;
    if (firstElement === secondElement) continue;
  	if (thirdElement === secondElement) continue;
  	if (thirdElement === i) count++;
  }

  return count / 3;
};