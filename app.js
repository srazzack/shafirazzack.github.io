var data = {
    "events": [
      {
        "occasion": "Birthday party",
        "invited_count": 120,
        "year": 2015,
        "month": 3,
        "day": 14
      },
      {
        "occasion": "Technical discussion",
        "invited_count": 23,
        "year": 2015,
        "month": 4,
        "day": 24
      },
      {
        "occasion": "Press release",
        "invited_count": 64,
        "year": 2015,
        "month": 6,
        "day": 7,
        "cancelled": true
      },
      {
        "occasion": "New year party",
        "invited_count": 55,
        "year": 2016,
        "month": 1,
        "day": 1
      }
    ]
};
var eventsApp = angular.module('eventsApp', []);

eventsApp.controller('EventsController', ['$scope', function ($scope) {
    $scope.events = data.events;

    $scope.getEventStatus = function(event) {
        return !event.cancelled;
    }

    $scope.getFormatedDate = function(event, day) {
        var dateString = event.month + ' ' + event.day + ' ' + event.year;
        if (day) {
            displayDate = moment(dateString).format('dddd');
        } else {
            displayDate = moment(dateString).format('MMMM Do YYYY');
        }
        return displayDate;
    }
}]);