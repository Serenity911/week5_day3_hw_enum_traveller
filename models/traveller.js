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

};

Traveller.prototype.getUniqueModesOfTransport = function () {

};


module.exports = Traveller;
