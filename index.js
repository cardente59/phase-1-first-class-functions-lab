const array = ['Antonia', 'Nuru', 'Amari', 'Mo'];
 function returnFirstTwoDrivers(drivers){
   return drivers.slice (0,2)
 }

function returnLastTwoDrivers(drivers){
    return drivers.slice (2,4)
}

const selectingDrivers = [returnFirstTwoDrivers , returnLastTwoDrivers]

function createFareMultiplier(n){
    return function (someFare){
return (someFare * n)
    }
}

function fareDoubler(n){
 return createFareMultiplier(2)(n)
}

function fareTripler(n){
return createFareMultiplier(3)(n)
}

function fareQuintupler(){
    
}

function selectDifferentDrivers(drivers,num){
return num(drivers)
}