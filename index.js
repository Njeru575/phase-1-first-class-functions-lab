function returnFirstTwoDrivers(drivers) {
    return drivers.slice(0, 2);
}

function returnLastTwoDrivers(drivers) {
    return drivers.slice(-2);
}

function createFareMultiplier(multiplier) {
    return function (fare) {
        return fare * multiplier;
    };
}


function fareDoubler(fare) {
    return fare * 2;
}


function fareTripler(fare) {
    return fare * 3;
}


function selectDifferentDrivers(drivers, func) {
    return func(drivers);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
