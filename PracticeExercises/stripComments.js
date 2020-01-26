// Instructions
// Complete the solution so that it strips all text that follows any of a set of comment markers passed in.
// Any whitespace at the end of the line should also be stripped out.
// my solution
function solution(input, markers) {
  var comments = input.split("\n");
  for (var i in markers) {
    for (var j in comments) {
      var idx = comments[j].indexOf(markers[i]);
      if (idx >= 0) {
        comments[j] = comments[j].substring(0, idx).trim();
      }
    }
  }
  return comments.join("\n");
}

// best solution found
function solution(input, markers) {
  return input
    .split("\n")
    .map(line =>
      markers.reduce((line, marker) => line.split(marker)[0].trim(), line)
    )
    .join("\n");
}
