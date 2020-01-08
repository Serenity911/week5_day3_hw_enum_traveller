const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  const results = this.journeys.map((journey) => {
    return journey.startLocation;
  });
  return results;
};

Traveller.prototype.getJourneyEndLocations = function () {
  const results = this.journeys.map((journey) => {
    return journey.endLocation;
  });
  return results;
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  const results = this.journeys.filter((journey) => {
    return journey.transport === transport;
  });
  return results;
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  const results = this.journeys.filter((journey) => {
    return journey.distance > minDistance;
  });
  return results;
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  const result = this.journeys.reduce((runningTotal, currentJourney) => {
    return runningTotal + currentJourney.distance;
  }, 0);
  return result;
};

Traveller.prototype.getUniqueModesOfTransportSorted = function () {
  const transports = this.journeys.map((journey) => {
    return journey.transport;
  });

  const sortedTrasports = transports.sort();
  console.log("log the transports:" , transports);

  const results = [];

  transports.filter((transport) => {
    if (results.includes(transport) === false) {
      results.push(transport);
    };
  });
  const sortedResults = results.sort();
  console.log("log the sorted results:" , sortedResults);

  return sortedResults;
};


module.exports = Traveller;
