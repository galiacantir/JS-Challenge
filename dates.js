// - 1 - Check if two dates are equal
// Sounds easy, but you need to know the trick. Write a function that takes two date instances as arguments. 
// It should return true if the dates are equal. It should return false otherwise.

function myFunction1(a,b){
    return a.getTime() === b.getTime();
}

myFunction1(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:00')) // expected false


// ---------------------------------------------------------------------------------------------------

// - 2 - Return the number of days between two dates
// Write a function that takes two date instances as argument. It should return the number of days that lies between those dates.

function numberOfDays(a, b){
    const dif = Math.abs(a - b);
    return dif / 1000 / 60 / 60 / 24;
}

myFunction(new Date('2020-06-11'), new Date('2020-06-01')) // expected 10

//--------------------------------------------------------------------------------------------

// - 3 - Check if two dates fall on the exact same day
// Write a function that takes two date instances as argument. 
// It should return true if they fall on the exact same day. It should return false otherwise.


function sameDay(a, b){
    const day1 = a.getDay();
    const month1 = a.getMonth();
    const year1 = a.getFullYear();

    const day2 = b.getDay();
    const month2 = b.getMonth();
    const year2 = b.getFullYear();

    if(day1 === day2 && month1 === month2 && year1 === year2){
        return true
    } else {
        return false
    }

}
sameDay(new Date('2000/01/01'), new Date('2000/01/01')) // expected true

// solutia autorului: 
function myFunction(a, b) {
    return a.getFullYear() === b.getFullYear() &&
           a.getMonth() === b.getMonth() &&
           a.getDate()=== b.getDate()
}

//---------------------------------------------------------------------------------------

// - 4 - Check if two dates are within 1 hour from each other
// Write a function that takes two date instances as argument. It should return true if the difference between the dates is less than or equal to 1 hour.

function checkDates(a, b){
    const day1 = a.getDay();
    const month1 = a.getMonth();
    const year1 = a.getFullYear();

    const day2 = b.getDay();
    const month2 = b.getMonth();
    const year2 = b.getFullYear();

    const differenceHour = b.getTime() - a.getTime();
    const minutes = Math.floor(differenceHour / 60000);
     if(day1 === day2 && month1 === month2 && year1 === year2){
        if(minutes < 0){
            minutes * -1;
        }
        if(minutes <=60){
            return true;
        }
     }
     return false;
}

checkDates(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:00')) // expected true 

// solutia autorului: 

function myFunction(a, b) {
    return Math.abs(a - b) / 1000 / 60 <= 60
}

//---------------------------------------------------------------------------------------

// - 5 - Check if one date is earlier than another
// Write a function that takes two date instances (a and b) as arguments. It should return true if a is earlier than b. It should return false otherwise.

function earlierDate(a, b){
    
    return a.getTime() < b.getTime();
}

earlier(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:00')) // expected true

//-------------------------------------------------------------------------------------------

// - 6 - Add n days to an existing date
// Write a function that takes as argument a date instance (a) and a number (b). It should add b days to a and return the number of milliseconds since January 1, 1970, 00:00:00 UTC.

function addDays(a,b){
    const newDate = new Date(a);
    newDate.setDate(a.getDate() + b);
    return newDate;
}

// solutia autorului: 
function myFunction(a, b) {
    const currentDays = a.getDate();
    return a.setDate(currentDays + b)
}

myFunction(new Date(Date.UTC('2000/01/01')), 31) // Expected 952041600000


// ----------------------------------------------------------------------------------------

// - 7 - Calculate difference between two dates in hours, minutes, and seconds

function myFunction7(a, b){
    const dif = Math.abs(a - b);
    const hrs = Math.floor(dif / 1000 / 60 / 60);
    const min = Math.floor(dif / 1000 / 60) % (hrs * 60 || 60);
    const sec = Math.floor(dif / 1000) % (min * 60 + hrs * 60 * 60 || 60);
    return { hrs, min, sec };
}

myFunction7(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:10')) // expected { hrs: 0, min: 45, sec: 10 }

//------------------------------------------------------------------------------------------------

// - 8 - Return the next nearest quarter hour of a date

function myFunction(date) {
    const quarter = 15 * 60 * 1000;
    const closestQuarter = new Date(Math.round(date / quarter) * quarter);
    const nextQuarter = closestQuarter.getTime() < date.getTime() ? new Date(closestQuarter.getTime() + quarter) : closestQuarter;
    return nextQuarter.getMinutes();
}

myFunction(new Date(2021, 8, 10, 15, 14)) // expected 15

