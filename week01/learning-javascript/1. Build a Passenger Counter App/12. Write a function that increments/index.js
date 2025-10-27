let lapsCompleted = 0;

// Create a function that increments the lapsCompleted variable with one
function incrementLap() {
  lapsCompleted += 1;
  return lapsCompleted;
}

incrementLap();
incrementLap();
incrementLap();
// Run it three times

console.log(lapsCompleted);
