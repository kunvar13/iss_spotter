const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes, nextISSTimesForMyLocation} = require('./iss');

fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  } else if (ip) {
    console.log('It worked! Returned IP:' , ip);

  }
});

fetchCoordsByIP('204.83.131.120', (error, coordinates) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  } else {
    console.log('It worked! Returned Coordinates:', coordinates);

  }
});

const coords = { latitude: 50.4481, longitude: -104.6126 };

fetchISSFlyOverTimes(coords, (error, flyOver) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }
  console.log('It worked! Returned flyOvertimes:', flyOver);

});

const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, flyOver) => {
  if (error) {
    return console.log("It didn't work!", error);
  }

  printPassTimes(flyOver);

});